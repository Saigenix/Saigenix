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

export const useVoiceStore = create((set) => ({
  voice: null,
  pitch:1,
  rate:1,
  api_key:"",
  setVoice: (voice) => set({ voice }),
  setPitch: (pitch) => set({ pitch }),
  setRate: (rate) => set({ rate }),
  setApi_key: (api_key) => set({ api_key }),
}));