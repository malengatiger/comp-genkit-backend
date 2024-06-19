"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJackShitFlow = void 0;
const ai_1 = require("@genkit-ai/ai");
const flow_1 = require("@genkit-ai/flow");
const vertexai_1 = require("@genkit-ai/vertexai");
const zod_1 = require("zod");
const jackShitFlow = (0, flow_1.defineFlow)({
    name: "jackShitFlow",
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
async function getJackShitFlow() {
    return jackShitFlow;
}
exports.getJackShitFlow = getJackShitFlow;
//# sourceMappingURL=jack_shit_flow.js.map