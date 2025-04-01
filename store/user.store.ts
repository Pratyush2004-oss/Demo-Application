import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { create } from "zustand";

interface User {
  user: {
    name: string;
    email: string;
  } | null;
  loading: boolean;

  login(name: string, email: string): Promise<void>;
  logout(): Promise<void>;
  checkUser(): Promise<void>;
}
export const useUserStore = create<User>((set) => ({
  user: null,
  loading: false,
  login: async (name, email) => {
    const user = {
      name: name,
      email: email,
    };
    AsyncStorage.setItem("user", JSON.stringify(user));
    set({ user: user });
    Alert.alert("Login successful");
  },
  logout: async () => {
    set({ loading: true });
    try {
      await AsyncStorage.removeItem("user");
      set({ user: null });
      Alert.alert("Logout successful");
    } catch (error) {
    } finally {
      set({ loading: false });
    }
  },
  checkUser: async () => {
    try {
      set({ loading: true });
      const user = await AsyncStorage.getItem("user");
      if (user) {
        set({ user: JSON.parse(user) });
      }
    } catch (error) {
    } finally {
      set({ loading: false });
    }
  },
}));
