import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { validateEmail, validatePassword } from "../../utitlity";
function CreateAccountScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const navigation = useNavigation();
  const handleLogin = () => {
    if (!email) {
      setErrors({ ...errors, email: "Field is required!" });
    } else if (!password) {
      setErrors({ ...errors, password: "Field is required!" });
    } else if (errors?.email || errors?.password) {
      if (errors?.email) {
        setErrors({ ...errors, email: "Invalid email!" });
      } else {
        setErrors({ ...errors, password: "Invalid password!" });
      }
    } else {
      callAuthAPi();
    }
  };
  const callAuthAPi = () => {
    try {
      // Assuming email and password are variables in your code
      axios({
        method: "post",
        url: `${BASE_URL}/auth/signup`,
        data: {
          email: email,
          password: password,
        },
      })
        .then((response) => {
          console.log(response.data);
          navigation.navigate("SignIn");
        })
        .catch((err) => {
          setLoginError(err.response.data.message);
        });
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (name, value) => {
    if (name === "email") {
      setEmail(value);
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "Invalid Email!" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }
    if (name === "password") {
      setPassword(value);
      if (!validatePassword(value)) {
        setErrors({ ...errors, password: "Invalid Password!" });
      } else {
        setErrors({ ...errors, password: "" });
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <View style={{ flexDirection: "row", columnGap: 5 }}>
            <Text style={styles.inputLabel}>Username or E-mail</Text>
            <Text style={{ color: "red", fontSize: 12 }}>*</Text>
          </View>
          <TextInput
            placeholder="enter your username or e-mail"
            style={styles.inputField}
            value={email}
            onChangeText={(text) => handleChange("email", text)}
          />
          {errors?.email && (
            <Text style={{ color: "red", fontSize: 12 }}>{errors?.email}</Text>
          )}
        </View>
        <View style={styles.fieldContainer}>
          <View style={{ flexDirection: "row", columnGap: 5 }}>
            <Text style={styles.inputLabel}>Password</Text>
            <Text style={{ color: "red", fontSize: 12 }}>*</Text>
          </View>
          <TextInput
            placeholder="enter a password"
            style={styles.inputField}
            value={password}
            onChangeText={(text) => handleChange("password", text)}
          />
          {errors?.password && (
            <Text style={{ color: "red", fontSize: 12 }}>
              {errors?.password}
            </Text>
          )}
          <View>
            <Text style={{ fontSize: 12, color: "green" }}>
              The password must be at least 8 characters long.
            </Text>
            <Text style={{ fontSize: 12, color: "green" }}>
              Contain at least one uppercase letter.
            </Text>
            <Text style={{ fontSize: 12, color: "green" }}>
              Contain at least one lowercase letter.
            </Text>
            <Text style={{ fontSize: 12, color: "green" }}>
              Contain at least one number.
            </Text>
            <Text style={{ fontSize: 12, color: "green" }}>
              Contain at least one special character.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.createAccountBtn}
          onPress={() => handleLogin()}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
           Sign Up
          </Text>
        </Pressable>
        {/* <View>
          <Text
            style={{ textAlign: "center", marginVertical: 10, color: "#666" }}
          >
            or Sign in with
          </Text>
        </View> */}
        {/* <Pressable style={styles.signInBtn}>
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
        </Pressable> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={{ color: "#9BC7E5" }}>SignIn</Text>
          </Pressable>
        </View>
      </View>
      {loginError &&
        Alert.alert(
          "Login Error",
          loginError,
          [
            {
              text: "OK",
              onPress: () => setLoginError(""),
            },
          ],
          { cancelable: false }
        )}
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
    flex: 3,
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
    backgroundColor: "#fff",
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
