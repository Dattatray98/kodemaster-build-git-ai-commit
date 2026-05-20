import { loadConfig } from "../config/config"
import { generateWithOllama } from "./ollama";
import { generateWithOpenAI } from "./openai";



export const generateCommitMessage = async (diff: string): Promise<string> => {

    try {
        if (!diff || typeof diff !== 'string' || diff.trim() === '') {
            throw new Error("stages are missing!");
        }

        const config = await loadConfig();
        if (!config || !config.model || !config.provider) {
            throw new Error("Configuration is missing");
        }

        let res;

        if (config?.provider === "openai") {
            res = await generateWithOpenAI(diff, config.model);
        } else if (config.provider === "ollama") {
            res = await generateWithOllama(diff, config?.model)
        } else {
            throw new Error(`Unsupported provider : ${config.provider}`);
        }

        if (!res) {
            throw new Error("Failed to generate commit message");
        }

        return res;

    } catch (error) {
        console.error(error);
        throw error;
    }
}
