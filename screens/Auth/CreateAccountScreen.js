import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function CreateAccountScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation=useNavigation()
  const handleLogin = () => {
    navigation.replace('Home')
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.inputLabel}>Username or E-mail</Text>
          <TextInput
            placeholder="enter your username or e-mail"
            style={styles.inputField}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            placeholder="enter a password"
            style={styles.inputField}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.otherActionContainer}>
          <View>
            <Text>Remeber me</Text>
          </View>
          <Pressable>
            <Text style={{ color: "#9BC7E5" }}>Forgot password?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.createAccountBtn}
          onPress={() => handleLogin()}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
            Sign In
          </Text>
        </Pressable>
        <View>
          <Text
            style={{ textAlign: "center", marginVertical: 10, color: "#666" }}
          >
            or Sign in with
          </Text>
        </View>
        <Pressable style={styles.signInBtn}>
          <Ionicons name="logo-google" size={20}/>
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Google
          </Text>
        </Pressable>
        <Pressable style={styles.signInBtn}>
          <Ionicons name="logo-apple" size={20}/>
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Apple
          </Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Don't have an account? </Text>
          <Pressable>
            <Text style={{ color: "#9BC7E5" }}>CREATE ACCOUNT</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  formContainer: {
    flex: 1,
  },
  fieldContainer: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: "#8E9192",
  },
  inputField: {
    backgroundColor: "#F2F4F8",
    padding: 10,
    borderRadius: 7,
  },
  otherActionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  btnContainer: {
    flex: 1,
  },
  createAccountBtn: {
    backgroundColor: "#121619",
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
  },
  signInBtn: {
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 1,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
  },
});
