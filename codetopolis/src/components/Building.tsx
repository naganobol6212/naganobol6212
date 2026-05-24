"use client";

import { useMemo } from "react";
import type { FileNode } from "@/lib/types";

type Props = {
  file: FileNode;
  position: [number, number, number];
};

function locToColor(loc: number): string {
  if (loc < 50) return "#4ade80";
  if (loc < 150) return "#facc15";
  if (loc < 400) return "#fb923c";
  return "#ef4444";
}

export function Building({ file, position }: Props) {
  const height = useMemo(() => Math.max(0.5, file.loc / 20), [file.loc]);
  const width = useMemo(
    () => Math.max(0.8, Math.min(3, 0.8 + file.functions * 0.25)),
    [file.functions],
  );
  const color = useMemo(() => locToColor(file.loc), [file.loc]);

  const [x, , z] = position;

  return (
    <mesh position={[x, height / 2, z]} castShadow receiveShadow>
      <boxGeometry args={[width, height, width]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
