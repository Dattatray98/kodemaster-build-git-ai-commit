import { loadConfig } from "../config/config"
import { generateWithOllama } from "./ollama";



export const generateCommitMessage = async (diff: string) => {
    if (!diff || typeof diff !== 'string' || diff.trim() === '') {
        return "chore: minor repository updates";
    }

    const config = await loadConfig();
    if (!config) {
        console.log("config is missing!")
    }

    const res = await generateWithOllama(diff, config?.model!)

    if (!res) {
        console.log("response not received")
    }

    return res;
}
