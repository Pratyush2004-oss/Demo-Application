import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "@/constants/color";
import { useUserStore } from "@/store/user.store";
import { SETTINGDATA } from "@/constants/settings";

export default function settings() {
  const { user, logout, loading } = useUserStore();
  return (
    user && (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
          <View style={styles.detailContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>
        <Text style={styles.title}>Settings</Text>
        <FlatList
          style={{ width: "90%" }}
          data={SETTINGDATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.link}>
              <Text style={styles.btnText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.link} onPress={logout}>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.primary} />
          ) : (
            <Text style={styles.btnText}>Logout</Text>
          )}
        </TouchableOpacity>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.background,
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 25,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  email: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  detailContainer: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    padding: 15,
    gap: 10,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    borderRadius: 15,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color:COLORS.placeholderText
  },
});
