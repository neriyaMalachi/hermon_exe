import { create } from "zustand";

export const useStore = create((set) => ({
  count: 1,
  name: "neriya",
  inc: () => set((state) => ({ count: state.count + 1 })),
  dnc: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 1 }),
  update: (number) => set({ count: number }),

}));
