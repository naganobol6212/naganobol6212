"use client";

import { useMemo } from "react";
import type { Codebase } from "@/lib/types";
import { useSelectionStore } from "@/lib/store";

type Props = {
  codebase: Codebase;
};

export function FileDetailPanel({ codebase }: Props) {
  const selectedId = useSelectionStore((s) => s.selectedId);
  const setSelected = useSelectionStore((s) => s.setSelected);

  const file = useMemo(
    () => codebase.files.find((f) => f.id === selectedId) ?? null,
    [codebase.files, selectedId],
  );

  const dependsOn = useMemo(
    () =>
      selectedId
        ? codebase.edges
            .filter((e) => e.from === selectedId)
            .map((e) => e.to)
        : [],
    [codebase.edges, selectedId],
  );

  const dependedBy = useMemo(
    () =>
      selectedId
        ? codebase.edges
            .filter((e) => e.to === selectedId)
            .map((e) => e.from)
        : [],
    [codebase.edges, selectedId],
  );

  if (!file) return null;

  return (
    <div className="pointer-events-auto absolute right-4 top-4 z-10 w-80 rounded-lg border border-slate-700 bg-slate-900/90 p-4 text-sm text-slate-100 shadow-xl backdrop-blur">
      <div className="flex items-start justify-between gap-2">
        <div className="font-mono text-xs break-all text-slate-200">
          {file.path}
        </div>
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="rounded px-2 py-0.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded bg-slate-800/70 px-2 py-1">
          <dt className="text-slate-400">LOC</dt>
          <dd className="font-semibold">{file.loc}</dd>
        </div>
        <div className="rounded bg-slate-800/70 px-2 py-1">
          <dt className="text-slate-400">functions</dt>
          <dd className="font-semibold">{file.functions}</dd>
        </div>
      </dl>

      <Section title={`depends on (${dependsOn.length})`} items={dependsOn} />
      <Section
        title={`depended by (${dependedBy.length})`}
        items={dependedBy}
      />

      {file.imports.length > 0 && (
        <Section
          title={`raw imports (${file.imports.length})`}
          items={file.imports}
        />
      )}
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  const setSelected = useSelectionStore((s) => s.setSelected);

  return (
    <div className="mt-3">
      <div className="text-[11px] uppercase tracking-wider text-slate-400">
        {title}
      </div>
      {items.length === 0 ? (
        <div className="mt-1 text-xs text-slate-500">—</div>
      ) : (
        <ul className="mt-1 space-y-0.5">
          {items.map((it) => (
            <li key={it}>
              <button
                type="button"
                onClick={() => setSelected(it)}
                className="block w-full truncate rounded px-1 py-0.5 text-left font-mono text-xs text-slate-200 hover:bg-slate-800"
                title={it}
              >
                {it}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
