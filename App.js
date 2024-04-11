import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './screens/Onboarding';
import LoginScreen from './screens/Auth/LoginScreen';
import { StatusBar } from 'react-native';
import CreateAccountScreen from './screens/Auth/CreateAccountScreen';

// Import screens

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
