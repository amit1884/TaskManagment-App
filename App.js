import React from "react";
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

// Import screens

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Onboarding">
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
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Tasks" component={TaskScreen} />
        <Stack.Screen name="Folders" component={FoldersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
