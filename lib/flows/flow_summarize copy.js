"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummarizeFlow = void 0;
const ai_1 = require("@genkit-ai/ai");
const flow_1 = require("@genkit-ai/flow");
const vertexai_1 = require("@genkit-ai/vertexai");
const zod_1 = require("zod");
const summarizePdfFlow = (0, flow_1.defineFlow)({
    name: "summarizePdfFlow",
    inputSchema: zod_1.z.string(),
    outputSchema: zod_1.z.string(),
}, async (prompt) => {
    const llmResponse = await (0, ai_1.generate)({
        prompt: `${prompt}`,
        model: vertexai_1.geminiPro,
        config: {
            temperature: 1,
        },
    });
    return llmResponse.text();
});
async function getSummarizeFlow() {
    return summarizePdfFlow;
}
exports.getSummarizeFlow = getSummarizeFlow;
//# sourceMappingURL=flow_summarize%20copy.js.map