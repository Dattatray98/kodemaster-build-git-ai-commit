import { openai } from "./openai";

const SYSTEM_PROMPT = `
You are an AI commit message generator.

Your task:
- Analyze the provided git diff summary.
- Generate ONE concise conventional commit message.
- Output ONLY the commit message.
- Do NOT explain anything.
- Do NOT use quotes.
- Do NOT use markdown.
- Do NOT add extra lines.

Rules:
- Use conventional commit format.
- Allowed types:
  feat:
  fix:
  docs:
  refactor:
  chore:
  test:
  style:

Examples:
feat: add user authentication flow
fix: resolve API response parsing issue
docs: update installation instructions
chore: update project dependencies
refactor: simplify diff parser logic

Generate a commit message based on the provided diff.
`;

export const generateCommitMessage = async (diff: string): Promise<string> => {
    // Falls back to gpt-3.5-turbo for remote tests, but reads your local override if present
    const targetModel = process.env.OPENAI_MODEL || "gpt-3.5-turbo";

    const completion = await openai.chat.completions.create({
        model: targetModel,
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: diff }
        ],
        max_tokens: 200,
        temperature: 0.1
    });

    const content = completion.choices?.[0]?.message?.content;
    
    if (!content) {
        throw new Error("No content received from completion model");
    }

    // Safely extract the first non-empty line
    const lines = content.split('\n').map(line => line.trim()).filter(Boolean);
    const primaryLine = lines[0] || '';

    return primaryLine
        .replace(/^["'`]/, '')
        .replace(/["'`]$/, '')
        .trim();
};
