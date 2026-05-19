import { Command } from "commander";
import { setupConfig } from "../config/setup";
import { loadConfig } from "../config/config";

export const configCommand = new Command("config")
    .description("Configure Navix AI provider and model")
    .option("--provider <provider>", "AI provider")
    .option("--model <model>", "Model name")
    .action(async (options) => {
        const { provider, model } = options;
        await setupConfig(provider, model);
    })


export const checkConfigCommand = new Command("check-config")
    .description("check the AI provider name and model name")
    .action(async () => {
        const config = await loadConfig();
        if (!config) {
            console.log("config is missing!");
        }
        console.log(config)
    })

