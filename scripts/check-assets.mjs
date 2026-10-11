import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const source = await readFile(resolve("src/data/projects.ts"), "utf8");
const assets = [...source.matchAll(/image:\s*"\.\/(.*?)"/g)].map((match) => match[1]);
const missing = [];

for (const asset of assets) {
  try {
    await access(resolve("public", asset));
  } catch {
    missing.push(asset);
  }
}

if (missing.length) {
  console.error(`Missing public assets:\n${missing.map((asset) => `- ${asset}`).join("\n")}`);
  process.exit(1);
}

console.log(`Checked ${assets.length} referenced public assets.`);
