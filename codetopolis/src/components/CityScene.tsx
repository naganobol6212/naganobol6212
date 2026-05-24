"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import { useMemo } from "react";
import type { Codebase } from "@/lib/types";
import { Building } from "./Building";

type Props = {
  codebase: Codebase;
};

const GRID_SPACING = 4;

function gridPosition(
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

export function CityScene({ codebase }: Props) {
  const positioned = useMemo(
    () =>
      codebase.files.map((file, i) => ({
        file,
        position: gridPosition(i, codebase.files.length, GRID_SPACING),
      })),
    [codebase.files],
  );

  return (
    <Canvas
      shadows
      camera={{ position: [15, 15, 15], fov: 50 }}
      style={{ width: "100%", height: "100%", background: "#0f172a" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Grid
        args={[60, 60]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#1e293b"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#334155"
        fadeDistance={50}
        fadeStrength={1}
        infiniteGrid
      />

      {positioned.map(({ file, position }) => (
        <Building key={file.id} file={file} position={position} />
      ))}

      <OrbitControls makeDefault enableDamping />
    </Canvas>
  );
}
