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
function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // navigation.replace('Home')
    if (!email) {
      setErrors({ ...errors, email: "Field is required!" });
    } else if (!password) {
      setErrors({ ...errors, password: "Field is required!" });
    } else {
      callAuthAPi();
    }
  };
  const callAuthAPi = () => {
    try {
      axios({
        method: "post",
        url: `${BASE_URL}/auth/login`,
        data: {
          email: email,
          password: password,
        },
      })
        .then((response) => {
          console.log(response.data);
          navigation.replace('Home')
        })
        .catch((err) => {
          console.error(err.response.data);
          setLoginError(err.response.data.message);
        });
    } catch (err) {
      console.error(err);
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
            onChangeText={(text) => setEmail(text)}
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
            onChangeText={(text) => setPassword(text)}
          />
          {errors?.password && (
            <Text style={{ color: "red", fontSize: 12 }}>
              {errors?.password}
            </Text>
          )}
        </View>
        <View style={styles.otherActionContainer}>
          <View>
            <Text>Remember me</Text>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("CreateAccount")}>
            <Text style={{ color: "#9BC7E5" }}>CREATE ACCOUNT</Text>
          </Pressable>
        </View>
      </View>
      {loginError &&
        Alert.alert(
          "Error",
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

export default SignInScreen;

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
