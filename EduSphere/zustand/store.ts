import { create } from "zustand";

interface UserStoreState {
  userId: string | null;
  addUserId: (iD: string) => void;
  removeUserId: () => void;
}

export const userStore = create<UserStoreState>((set) => ({
  userId: null,
  addUserId: (iD) => set({ userId: iD }),
  removeUserId: () => set({ userId: null }),
}));
