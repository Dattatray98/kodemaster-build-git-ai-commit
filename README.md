
# Navix - Navigational AI for Versioning & Intelligent eXecution

AI-powered commit message generator for Git repositories using Bun, TypeScript, OpenAI, and Ollama.

Generate clean conventional commit messages directly from your staged Git changes.

## Features

- Generate commit messages from staged Git diffs
- Supports Conventional Commit format
- OpenAI integration
- Ollama local AI fallback
- Fast Bun runtime
- TypeScript support
- CLI-based workflow
- Diff parsing and filtering

---

## Tech Stack

- Bun
- TypeScript
- Commander.js
- OpenAI API
- Ollama
- Chalk

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/git-ai-commit.git
cd git-ai-commit
```

Install dependencies:

```bash
bun install
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
OPENAI_API_KEY=your_openai_api_key
```

---

## Usage

Stage your changes:

```bash
git add .
```

Generate commit message:

```bash
bun run dev generate
```

Example output:

```bash
feat: add git diff parser
```

---

## Available Commands

### Generate Commit Message

```bash
bun run dev generate
```

### Show Git Diff

```bash
bun run dev diff
```

### Hello Test Command

```bash
bun run dev hello
```

---

## Project Structure

```text
src/
├── ai/
│   ├── generator.ts
│   └── openai.ts
├── git/
│   ├── diff.ts
│   └── parser.ts
├── utils/
│   └── formatter.ts
├── config.ts
└── index.ts
```

---

## How It Works

1. Reads staged Git changes
2. Parses and filters diffs
3. Creates a structured AI prompt
4. Sends prompt to OpenAI
5. Falls back to Ollama if needed
6. Returns a clean conventional commit message

---

## Conventional Commit Examples

```text
feat: add authentication module
fix: resolve parser crash
chore: update dependencies
docs: update README
refactor: simplify commit generation flow
```

---

## Future Improvements

- Interactive commit selection
- Git hook integration
- Multi-language support
- Better diff summarization
- Local embedding support
- Streaming responses
- Commit history learning

---

## Author

Developed by Dattatray Kadre

