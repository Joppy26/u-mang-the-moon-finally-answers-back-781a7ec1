// The Moon Finally Answers Back — deterministic one-line entry.
// The text is fixed in this file: no input, no randomness, no network,
// so every run writes the exact same bytes to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You wished for a parking spot, so I moved the tide instead. You're welcome. Now stop howling at 3 a.m. I'm trying to reflect.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
