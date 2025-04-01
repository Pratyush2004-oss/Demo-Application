import { COLORS } from "@/constants/color";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserStore } from "@/store/user.store";

export default function Index() {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const { login } = useUserStore();

  const handleLogin = async () => {
    setloading(true);

    try {
      if (!name || !email) {
        Alert.alert("Please fill in all the fields");
        return;
      }
      if (!email.includes("@")) {
        Alert.alert("Please enter a valid email");
        return;
      }
      await login(name, email);
    } catch (error) {
      console.log(error)
      Alert.alert("Something went wrong");
    } finally {
      setloading(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setname}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setemail}
              />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                {loading ? (
                  <ActivityIndicator size={"small"} color={COLORS.white} />
                ) : (
                  <Text style={styles.btnText}>Login</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: COLORS.background,
  },
  card: {
    width: "80%",
    backgroundColor: COLORS.cardBackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 35,
  },
  formContainer: {
    gap: 10,
    width: "100%",
    marginVertical: 10,
  },
  inputContainer: {
    width: "90%",
    marginHorizontal: "auto",
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: COLORS.textDark,
  },
  input: {
    backgroundColor: COLORS.inputBackground,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  btnContainer: {
    width: "90%",
    marginHorizontal: "auto",
    marginVertical: 10,
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 20,
  },
});
