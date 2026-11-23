// One Word From Grandma — the single word a grandma would text about AI.
// The program writes the word to /output/entry.txt (1-30 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Witchcraft";

// The gate requires 1-30 characters of UTF-8 text, not only whitespace.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error("entry word must be 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
