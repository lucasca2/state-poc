import { create } from 'zustand'

type SwitcherStore = {
  switcherValue: boolean;
  toggle: () => void;
  title: string;
};

export const useSwitcherStore = create<SwitcherStore>((set) => ({
  title: "Zustand",
  switcherValue: false,
  toggle: () => set((state) => ({ switcherValue: !state.switcherValue })),
}))