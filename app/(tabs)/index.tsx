import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useUserStore } from "@/store/user.store";
import { COLORS } from "@/constants/color";
import { books } from "@/constants/Data";

export default function index() {
  const { user } = useUserStore();
  return (
    user && (
      <View style={styles.container}>
        <View
          style={{
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Text style={styles.name}>Welcome 👋🏼 {user.name}</Text>
        </View>
        <Text style={[styles.name, { paddingBottom: 10 }]}>Posts</Text>
        <FlatList
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          data={books}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 10,
                }}
              >
                <Image
                  source={{ uri: item.user.profileImage }}
                  style={styles.avatar}
                />
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.user.username}
                </Text>
                <Text>{item.createdAt.split("T")[0]}</Text>
              </View>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={{ gap: 10 }}>
                <Text style={[styles.name, { textAlign: "center" }]}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 15 }}>{item.caption}</Text>
              </View>
            </View>
          )}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: 25,
    gap: 10,
    width: "100%",
    alignItems: "stretch",
    justifyContent: "center",
    shadowColor: "#000",
    marginVertical: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
  },
});
