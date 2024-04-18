import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./screens/Onboarding";
import LoginScreen from "./screens/Auth/LoginScreen";
import { StatusBar } from "react-native";
import CreateAccountScreen from "./screens/Auth/CreateAccountScreen";
import HomeScreen from "./screens/Home";
import TaskScreen from "./screens/Tasks";
import FoldersScreen from "./screens/Folders";
import SignInScreen from "./screens/Auth/SignInScreen";
import { getItemFromStorage } from "./utitlity";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserData } from "./redux/slice/authSlice";
import TaskDetails from "./screens/TaskDetails";

const Stack = createStackNavigator();

const Routes = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (!token) {
      getItemFromStorage("token").then((value) => {
        if (value) {
          dispatch(setToken(value));
        }
      });
      getItemFromStorage("userData").then((value) => {
        if (value) {
          dispatch(setUserData(JSON.parse(value)));
        }
      });
    }
  }, [token]);

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName={token ? "Home" : "Onboarding"}>
        {/* Public Routes */}
        {!token && (
          <>
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccountScreen}
            />
            <Stack.Screen name="SignIn" component={SignInScreen} />
          </>
        )}
        {/* Private Routes */}
        {token && (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Tasks" component={TaskScreen} />
            <Stack.Screen name="Folders" component={FoldersScreen} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
