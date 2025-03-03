import React from "react";
import {
  HomePage,
  LikedPage,
  ShopListPage,
  Details,
} from "../index.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Liked") {
            iconName = "heart";
          } else if (route.name === "Shopping List") {
            iconName = "cart";
          } else if (route.name === "Details") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Liked" component={LikedPage} />
      <Tab.Screen name="Shopping List" component={ShopListPage} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
};

export default UserStack;
