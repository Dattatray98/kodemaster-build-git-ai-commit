import { join } from "node:path";
import { FileChange } from "../types/filetypes";

export const parseDiff = (rawDiff: string): FileChange[] => {
    const chunks = rawDiff.split('diff --git').filter(Boolean);

    return chunks.map(chunk => {
        const lines = chunk.split('\n');

        const fileMatch = lines[0].match(/a\/(.+) b\//);
        const file = fileMatch ? fileMatch[1] : "unknown";

        let additions = 0;
        let deletions = 0;

        for (const line of lines) {
            if (line.startsWith("+") && !line.startsWith("+++")) additions++;

            if (line.startsWith("-") && !line.startsWith('---')) deletions++;
        }

        return { file, additions, deletions, content: chunk };
    });
}



const IGNORED_FILES = ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', '.DS_Store'];



const clearDiffContent = (content: string) => {
    return content.split("\n").filter(line => {
        const iscodeChange = line.startsWith("+") || line.startsWith("-");

        const isCodeMetadata = line.startsWith('+++') ||
            line.startsWith('---') ||
            line.startsWith('diff --git') ||
            line.startsWith('index ') ||
            line.startsWith('@@');

        
        return iscodeChange && !isCodeMetadata;
    }).join("\n");
}
export const filterChanges = (Changes: FileChange[]): FileChange[] => {
    return Changes.filter(change => !IGNORED_FILES.includes(change.file)).map(change =>({
        ...change,
        content: clearDiffContent(change.content)
    }));
}

