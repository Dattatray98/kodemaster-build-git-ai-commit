import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "mock-key",
  baseURL: process.env.OPENAI_BASE_URL || undefined, // Uses OpenAI cloud default when remote testing
});
