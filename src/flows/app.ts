import { generate } from "@genkit-ai/ai";
import { defineFlow } from "@genkit-ai/flow";
import { geminiPro } from "@genkit-ai/vertexai";
import { z } from "zod";
const mm = "🔴 appFlow";

 const appFlow = defineFlow(
   {
     name: "appFlow",
     inputSchema: z.string(),
     outputSchema: z.string(),
   },
   async (prompt) => {
        console.log(`${mm} Running app flow with ${prompt}`);

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

export async function getAppFlow() {
  return appFlow;
}
