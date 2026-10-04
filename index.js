import { readFile } from "fs/promises";
import path from "path";

const filename = process.argv[2];

if (!filename) {
  console.log("Please provide a filename.");
  console.log("Example: npm start sample.txt");
  process.exit(1);
}

try {
  const filePath = path.resolve(filename);
  const text = await readFile(filePath, "utf8");

  const lines = text.split(/\r?\n/).length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;

  console.log(`File: ${filename}`);
  console.log(`Lines: ${lines}`);
  console.log(`Words: ${words}`);
  console.log(`Characters: ${characters}`);
} catch (error) {
  console.error(`Could not read file "${filename}".`);
  console.error(error.message);
  process.exit(1);
}