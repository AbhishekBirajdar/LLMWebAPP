import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { PlanAndExecuteAgentExecutor } from "langchain/experimental/plan_and_execute";
import { exec } from "child_process";

// export OPENAI_API_KEY=<>
// export SERPAPI_API_KEY=<>
// Replace with your API keys!

// to run, go to terminal and enter: cd playground
// then enter: node quickstart.mjs

const template ='You are a director of social media with 10 year experience. Please give me some ideas for content I should wrote about regarding{topic}?The content is for {socialplatform}. Translate to {language}.'

const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["topic","socialplatform","language"],
});

//const formattedPromptTemplate = await prompt.format({
//    topic: "artifical intelligence",
//    socialplatform: "twitter",
//    language: "english",
//});

//console.log({formattedPromptTemplate});

//LLM
//temperature 0 creative 1 very creative
const model =new OpenAI({temperature: 0.9});
const chain= new LLMChain({prompt:prompt,llm:model });
const resChain = await chain.call({
    topic: "artifical intelligence",
    socialplatform: "twitter",
    language: "english",
})

console.log({ resChain});