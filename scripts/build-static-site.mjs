import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const outputDirectory = resolve(root, "dist");
const publicDirectory = resolve(root, "public");
const calculatorPath = resolve(
  outputDirectory,
  "texas-holdem-hand-probability.html",
);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(publicDirectory, outputDirectory, { recursive: true });
await cp(calculatorPath, resolve(outputDirectory, "index.html"));

console.log(`Static site written to ${outputDirectory}`);
