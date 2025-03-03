import React from "react";
import { SplashPage, LogInPage, SignUpPage } from "../index.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashPage} />
      <Stack.Screen name="Login" component={LogInPage} />
      <Stack.Screen name="Signup" component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
