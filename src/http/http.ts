// src/http.ts
import express from "express";
import { runFlow } from "@genkit-ai/flow";
import { getAppFlow } from "../flows/app";
import { getMenuSuggestionFlow } from "../flows/menu_suggestion";
const mm = "💙 💙 💙 Http Routes 💙";
export const setupHttpRoutes = (app: express.Express) => {
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
      const menuSuggestionFlowInstance = await getMenuSuggestionFlow();
      response = await runFlow(menuSuggestionFlowInstance, subject);
      console.log(
        `${mm} menuSuggestion: returning response ${response.length} bytes`
      );

      res.json({ suggestion: response }); // Send the response
    } catch (error) {
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
      const appFlowInstance = await getAppFlow();
      response = await runFlow(appFlowInstance, prompt);
      console.log(`${mm} appFlow: returning response ${response.length} bytes`);

      res.json({ response: response }); // Send the response
    } catch (error) {
      console.error("Error executing appFlow:", error);
      res.status(500).json({ error: "Internal server error" });
    }
    // throw new Error("Flow has failed, probably no parameters.");
  });
};
