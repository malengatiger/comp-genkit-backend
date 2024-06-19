"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examRAGFlow = exports.pdfGeneratorFlow = exports.lessonPlan = exports.summaryFlow = exports.jackShitFlow = exports.appFlow = exports.menuSuggestionFlow = void 0;
const core_1 = require("@genkit-ai/core");
const flow_1 = require("@genkit-ai/flow");
const google_cloud_1 = require("@genkit-ai/google-cloud");
const vertexai_1 = require("@genkit-ai/vertexai");
const jack_shit_flow_1 = require("./flows/jack_shit_flow");
const flow_summarize_1 = require("./flows/flow_summarize");
const lesson_plan_1 = require("./flows/lesson_plan");
const pdf_generator_1 = require("./flows/pdf_generator");
const exam_rag_1 = require("./flows/exam_rag");
const app_1 = require("./flows/app");
const menu_suggestion_1 = require("./flows/menu_suggestion");
const mm = "🔵🔵🔵 Genkit App 🔵";
(0, core_1.configureGenkit)({
    plugins: [
        (0, google_cloud_1.googleCloud)(),
        (0, vertexai_1.vertexAI)({ location: 'us-central1' }),
    ],
    logLevel: 'debug',
    enableTracingAndMetrics: true,
});
exports.menuSuggestionFlow = (0, menu_suggestion_1.getMenuSuggestionFlow)();
exports.appFlow = (0, app_1.getAppFlow)();
exports.jackShitFlow = (0, jack_shit_flow_1.getJackShitFlow)();
exports.summaryFlow = (0, flow_summarize_1.getSummarizeFlow)();
exports.lessonPlan = (0, lesson_plan_1.getLessonPlanFlow)();
exports.pdfGeneratorFlow = (0, pdf_generator_1.getPdfGeneratorFlow)();
exports.examRAGFlow = (0, exam_rag_1.getExamRAGFlow)();
console.log(`${mm} Starting Genkit Flow Server ...`);
(0, flow_1.startFlowsServer)();
//# sourceMappingURL=index.js.map