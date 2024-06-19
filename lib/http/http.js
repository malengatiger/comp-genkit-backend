"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHttpRoutes = void 0;
const flow_1 = require("@genkit-ai/flow");
const app_1 = require("../flows/app");
const menu_suggestion_1 = require("../flows/menu_suggestion");
const mm = "💙 💙 💙 Http Routes 💙";
const setupHttpRoutes = (app) => {
    app.get("/menuSuggestion", async (req, res) => {
        console.log(`${mm} menuSuggestion starting ...: ${req.method} ${req.url}`);
        let response;
        try {
            const { subject } = req.query;
            if (!subject || typeof subject !== "string") {
                return res
                    .status(400)
                    .json({ error: "Missing or invalid subject in request" });
            }
            const menuSuggestionFlowInstance = await (0, menu_suggestion_1.getMenuSuggestionFlow)();
            response = await (0, flow_1.runFlow)(menuSuggestionFlowInstance, subject);
            console.log(`${mm} menuSuggestion: returning response ${response.length} bytes`);
            res.json({ suggestion: response }); // Send the response
        }
        catch (error) {
            console.error("Error executing menuSuggestionFlow:", error);
            res.status(500).json({ error: "Internal server error" });
        }
        // throw new Error("Flow has failed, probably no parameters.");
    });
    app.get("/appFlow", async (req, res) => {
        console.log(`[${mm}] appFlow starting : ${req.method} ${req.url}`);
        let response;
        try {
            const { prompt } = req.query;
            if (!prompt || typeof prompt !== "string") {
                return res
                    .status(400)
                    .json({ error: "Missing or invalid prompt in request" });
            }
            const appFlowInstance = await (0, app_1.getAppFlow)();
            response = await (0, flow_1.runFlow)(appFlowInstance, prompt);
            console.log(`${mm} appFlow: returning response ${response.length} bytes`);
            res.json({ response: response }); // Send the response
        }
        catch (error) {
            console.error("Error executing appFlow:", error);
            res.status(500).json({ error: "Internal server error" });
        }
        // throw new Error("Flow has failed, probably no parameters.");
    });
};
exports.setupHttpRoutes = setupHttpRoutes;
//# sourceMappingURL=http.js.map