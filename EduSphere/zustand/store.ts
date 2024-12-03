import { create } from "zustand";

interface UserStoreState {
  userId: string | null;
  addUserId: (userId: string) => void;
  removeUserId: () => void;
}

export const userStore = create<UserStoreState>((set) => ({
  userId: null,
  addUserId: (userId) => set({ userId }),
  removeUserId: () => set({ userId: null }),
}));
