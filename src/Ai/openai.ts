import OpenAI from "openai";
import { configEnv } from "../config/configEnv";

configEnv.OPEN_API_KEY;

export const openai = new OpenAI({
    apiKey: configEnv.OPEN_API_KEY
});