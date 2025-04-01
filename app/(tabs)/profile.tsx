import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserStore } from "@/store/user.store";
import { COLORS } from "@/constants/color";

export default function Profile() {
  const { user } = useUserStore();
  return (
    user && (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
          <View style={styles.detailContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>Email : {user?.email}</Text>
          </View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.background,
    gap: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: 25,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    width: "80%",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  email:{
    fontSize: 20
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
});
