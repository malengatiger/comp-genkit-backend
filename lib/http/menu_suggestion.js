"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flow_1 = require("@genkit-ai/flow");
const menu_suggestion_1 = require("../flows/menu_suggestion");
const mm = "💙💙💙 Http Endpoints 💙";
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Enable parsing JSON request bodies
app.get("/menuSuggestion3", async (req, res) => {
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
        res.json({ suggestion: response }); // Send the response
    }
    catch (error) {
        console.error("Error executing menuSuggestionFlow:", error);
        res.status(500).json({ error: "Internal server error" });
    }
    throw new Error("Flow has failed, probably no parameters.");
});
app.listen(3000, () => {
    console.log("Express server listening on port 3000");
});
//# sourceMappingURL=menu_suggestion.js.map