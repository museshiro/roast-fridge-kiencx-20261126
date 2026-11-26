import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the smart fridge, written verbatim to /output/entry.txt.
const LINE =
  "My smart fridge has a touchscreen for recipes and ads, which is great if I wanted a mall kiosk that also keeps the milk lukewarm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
