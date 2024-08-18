import { create } from "zustand";

export const useModelStore = create((set) => ({
  transcript: false,
  settings:false,
  about:false,
  contact:false,
  projects:false,
  resume:false,
  handleClose: (id) => set((state) => ({ [id]: !state[id] })),
}));
