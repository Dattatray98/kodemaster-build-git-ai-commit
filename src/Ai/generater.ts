import { openai } from "./openai";

const SYSTEM_PROMPT = 'You are a specialized commit message generator. Write a concise, conventional commit message based on the provided diff.';

export const generateCommitMessage = async (diff: string): Promise<string> =>{
    const completion = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
            {role: "system", content:SYSTEM_PROMPT},
            {role: "user", content:diff}
        ],
        max_tokens:200
    });

    return completion.choices[0].message.content || 'Error: No message generated';
}