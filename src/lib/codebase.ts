import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Codebase } from "./types";

export async function loadCodebase(): Promise<Codebase> {
  const filePath = path.join(process.cwd(), "public", "codebase.json");
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as Codebase;
}
