import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI agent promised a joke, then hallucinated the punchline and billed me for the laugh.";

// The entry must be exactly one line, non-empty, and at most 200 chars.
// Fail loudly instead of writing a bad entry.
if (JOKE.length === 0 || JOKE.length > 200) {
  throw new Error(`Invalid joke length: ${JOKE.length} chars (must be 1-200)`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
