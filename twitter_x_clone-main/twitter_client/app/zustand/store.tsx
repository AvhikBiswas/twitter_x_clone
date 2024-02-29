import { create } from "zustand";

type CurrentUser = {
  lastName: string;
  id: string;
  firstName: string;
  emailId: string;
  profileUrl: string;
};

interface userStore {
  CurrUser: CurrentUser | null; // Use CurrentUser | null to allow null value
  setUser: (user: CurrentUser) => void; // Update setUser to accept a CurrentUser parameter
  removeUser: () => void; // No need to pass any parameters to removeUser
}

const useUserStore = create<userStore>((set) => ({
  CurrUser: null, // Initialize CurrUser with null
  setUser: (user) => set({ CurrUser: user }), // Update CurrUser with the provided user object
  removeUser: () => set({ CurrUser: null }), // Set CurrUser back to null when removing the user
}));

export default useUserStore;
