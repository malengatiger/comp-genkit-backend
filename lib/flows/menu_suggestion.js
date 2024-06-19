"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuSuggestionFlow = void 0;
const ai_1 = require("@genkit-ai/ai");
const flow_1 = require("@genkit-ai/flow");
const vertexai_1 = require("@genkit-ai/vertexai");
const zod_1 = require("zod");
const mm = "🔴 menuSuggestionFlow";
const menuSuggestionFlow = (0, flow_1.defineFlow)({
    name: "menuSuggestionFlow",
    inputSchema: zod_1.z.string(),
    outputSchema: zod_1.z.string(),
}, async (subject) => {
    console.log(`${mm} Running menu suggestion flow for ${subject}`);
    const llmResponse = await (0, ai_1.generate)({
        prompt: `Suggest an item for the menu of a ${subject} themed restaurant`,
        model: vertexai_1.geminiPro,
        config: {
            temperature: 1,
        },
    });
    return llmResponse.text();
});
async function getMenuSuggestionFlow() {
    return menuSuggestionFlow;
}
exports.getMenuSuggestionFlow = getMenuSuggestionFlow;
//# sourceMappingURL=menu_suggestion.js.map