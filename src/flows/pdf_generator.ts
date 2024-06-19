import { generate } from "@genkit-ai/ai";
import { defineFlow } from "@genkit-ai/flow";
import { geminiPro } from "@genkit-ai/vertexai";
import { z } from "zod";

 const pdfGeneratorFlow = defineFlow(
   {
     name: "pdfGeneratorFlow",
     inputSchema: z.string(),
     outputSchema: z.string(),
   },
   async (prompt) => {
     const llmResponse = await generate({
       prompt: `${prompt}`,
       model: geminiPro,
       config: {
         temperature: 1,
       },
     });

     return llmResponse.text();
   }
 );

export async function getPdfGeneratorFlow() {
  return pdfGeneratorFlow;
}
