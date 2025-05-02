// stores/useDeleteStore.ts
import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';

interface DeleteState {
  deleteMode: boolean;
  selectedIds: number[];
  releadkey: number;
  toggleDelete: () => void;
  toggleSelect: (id: number) => void;
  setReloadKey: (key: number) => void;
}

const deleteStore = createStore<DeleteState>((set, get) => ({
  deleteMode: false,
  selectedIds: [],
  releadkey: 0,
  toggleDelete: () => set((s) => ({ deleteMode: !s.deleteMode })),
  toggleSelect: (id) => {
    const { selectedIds } = get();
    if (selectedIds.includes(id)) {
      set({ selectedIds: selectedIds.filter((i) => i !== id) });
    } else {
      set({ selectedIds: [...selectedIds, id] });
    }
  },
  setReloadKey: (key) => set({ releadkey: key }),
}));

export const useDeleteStore = <T>(selector: (state: DeleteState) => T): T =>
  useStore(deleteStore, selector);
