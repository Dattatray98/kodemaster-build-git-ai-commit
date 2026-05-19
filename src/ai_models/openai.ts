import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "local-bypass",
  // If running locally, this forwards to Ollama. When running remote, it defaults to standard OpenAI endpoint urls.
  baseURL: process.env.OPENAI_BASE_URL || undefined, 
});
