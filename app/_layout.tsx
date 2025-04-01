import { useUserStore } from "@/store/user.store";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  const { checkUser, user, loading } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) checkUser();
  }, [user]);

  useEffect(() => {
    const isSignedIn = user !== null;
    if (isSignedIn) {
      router.replace("/(tabs)");
    }
  }, [user]);

  if (loading) return null;
  return (
    <SafeAreaProvider style={{ paddingTop: insets.top }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar barStyle="light-content" />
    </SafeAreaProvider>
  );
}
