import { create } from "zustand";

interface UserStoreState {
  userId: string | null;
  userName:string|null;
  addUserId: (iD: string,name:string) => void;
  removeUserId: () => void;
}

export const userStore = create<UserStoreState>((set) => ({
  userId: null,
  userName:null,
  addUserId: (iD:string,name:string) => set({ userId: iD,userName:name }),
  removeUserId: () => set({ userId: null }),
}));
