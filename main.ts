import * as fs from "node:fs";

const sentence =
  "One road joins every town, so a letter you write reaches any door before the ink dries, and any question you send comes back answered.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", sentence, "utf8");
