import ollama from "ollama";
import { SYSTEM_PROMPT } from "../utils/prompt";

export const generateWithOllama = async (diff: string, model: string) => {
    try {

        if (!diff) {
            throw new Error("staged diff is missing!");
        }

        if (!model) {
            throw new Error("model name is missing!");
        }

        const response = await ollama.chat({
            model: model,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: diff }
            ]
        });


        const message = response.message.content;
        if(!message){
            throw new Error("No response recieved from ollama")
        }
        return message;
        
    } catch (error: any) {
        console.log(error);
        throw new Error(error);
    }
}