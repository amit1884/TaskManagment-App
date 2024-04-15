import React from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
function LoginScreen() {
    const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.AppName}>
        <Text style={styles.heading}>To Do App</Text>
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.createAccountBtn} onPress={()=>navigation.replace('CreateAccount')}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
            Create Account
          </Text>
        </Pressable>
        <Pressable style={styles.signInBtn} onPress={()=>navigation.replace('SignIn')}>
          <Text style={{ color: "#000", textAlign: "center", fontSize: 16 }}>
            Sign In
          </Text>
        </Pressable>
        <Pressable>
          <Text>Terms & Conditions</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  AppName: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 50,
  },
  btnContainer: {
    flex: 2,
    alignItems: "center",
  },
  createAccountBtn: {
    backgroundColor: "#121619",
    width: Dimensions.get("window").width - 20,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  signInBtn: {
    width: Dimensions.get("window").width - 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "#fff", // Add a background color for elevation to take effect
    elevation: 1,
    marginBottom: 10,
  },
});
