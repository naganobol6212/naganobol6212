import type { FileNode } from "./types";

export type BuildingDims = {
  height: number;
  width: number;
};

export type Positioned = {
  file: FileNode;
  position: [number, number, number];
  dims: BuildingDims;
};

export function computeDims(file: FileNode): BuildingDims {
  const height = Math.max(0.5, file.loc / 20);
  const width = Math.max(0.8, Math.min(3, 0.8 + file.functions * 0.25));
  return { height, width };
}

export function gridPosition(
  index: number,
  total: number,
  spacing: number,
): [number, number, number] {
  const cols = Math.ceil(Math.sqrt(total));
  const row = Math.floor(index / cols);
  const col = index % cols;
  const offset = ((cols - 1) * spacing) / 2;
  return [col * spacing - offset, 0, row * spacing - offset];
}

export function layoutFiles(
  files: FileNode[],
  spacing: number,
): Positioned[] {
  return files.map((file, i) => ({
    file,
    position: gridPosition(i, files.length, spacing),
    dims: computeDims(file),
  }));
}
