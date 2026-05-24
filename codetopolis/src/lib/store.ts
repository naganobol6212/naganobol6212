import { create } from "zustand";

type SelectionState = {
  selectedId: string | null;
  hoveredId: string | null;
  setSelected: (id: string | null) => void;
  setHovered: (id: string | null) => void;
};

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedId: null,
  hoveredId: null,
  setSelected: (id) => set({ selectedId: id }),
  setHovered: (id) => set({ hoveredId: id }),
}));
