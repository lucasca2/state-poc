import { create } from 'zustand'

type SwitcherStore = {
  title: string;
  switcherValue: boolean;
  toggle: () => void;
};

export const useSwitcherStore = create<SwitcherStore>((set) => ({
  title: "Zustand",
  switcherValue: false,
  toggle: () => set((state) => ({ switcherValue: !state.switcherValue })),
}))