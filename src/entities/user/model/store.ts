import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { User } from "./types";

type UserState = {
  users: User[];
  selectedUser: User | null;
  setUsers: (users: User[]) => void;
  setSelectedUser: (user: User | null) => void;
  addUser: (user: User) => void;
  removeUser: (userId: string) => void;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        selectedUser: null,
        setUsers: (users) => {
          set({ users });
        },
        setSelectedUser: (user) => {
          set({ selectedUser: user });
        },
        addUser: (user) => {
          set((state) => ({
            users: [...state.users, user],
          }));
        },
        removeUser: (userId) => {
          set((state) => ({
            users: state.users.filter((user) => user.id !== userId),
            selectedUser: state.selectedUser?.id === userId ? null : state.selectedUser,
          }));
        },
      }),
      { name: "user-store" }
    ),
    { name: "UserStore" }
  )
);
