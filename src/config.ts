import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

export const config = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
};


export const validateConfig = () => {
    if (!config.OPENAI_API_KEY) {
        console.log(chalk.yellow("OpenAI API key not found."))
        console.log(chalk.white("Set it using:"))
        console.log(chalk.green("Windows:"))
        console.log(chalk.gray('setx OPENAI_API_KEY "your-key"'))
        console.log(chalk.green("Mac/Linux:"))
        console.log(chalk.gray('export OPENAI_API_KEY="your-key"'))
        process.exit(1);
    }
}