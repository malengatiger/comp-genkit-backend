import { generate } from '@genkit-ai/ai';
import { configureGenkit } from '@genkit-ai/core';
import { defineFlow, startFlowsServer } from '@genkit-ai/flow';
import { geminiPro } from '@genkit-ai/vertexai';
import * as z from 'zod';
import { googleCloud } from '@genkit-ai/google-cloud';
import { vertexAI } from '@genkit-ai/vertexai';
import { getJackShitFlow } from './flows/jack_shit_flow';
import { getSummarizeFlow } from './flows/flow_summarize';
import { getLessonPlanFlow } from './flows/lesson_plan';
import { getPdfGeneratorFlow } from './flows/pdf_generator';
import { getExamRAGFlow } from './flows/exam_rag';
import { getAppFlow } from './flows/app';
import { getMenuSuggestionFlow } from './flows/menu_suggestion';
const mm = "🔵🔵🔵 Genkit App 🔵";

configureGenkit({
  plugins: [
    googleCloud(),
    vertexAI({ location: 'us-central1' }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export const menuSuggestionFlow = getMenuSuggestionFlow();
export const appFlow = getAppFlow();
export const jackShitFlow = getJackShitFlow();
export const summaryFlow  = getSummarizeFlow();
export const lessonPlan = getLessonPlanFlow();
export const pdfGeneratorFlow = getPdfGeneratorFlow();
export const examRAGFlow = getExamRAGFlow();

console.log(`${mm} Starting Genkit Flow Server ...`);
startFlowsServer();
