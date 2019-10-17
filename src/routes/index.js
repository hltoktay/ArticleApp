import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

// Screens
import BookingApp from "../index";
import Articles from "../component/Articles";
import Settings from "../component/Settings";

// const TabNavigator = createBottomTabNavigator({
//   Article: Articles,
//   Setting: Settings
// });

const AppStack = createBottomTabNavigator({
  Article: Articles,
  Setting: Settings
});

const AuthStack = createStackNavigator(
  {
    Home: BookingApp
  },
  {
    headerMode: "none"
  }
);

export const RootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack
      },
      {
        initialRouteName: "Auth"
      }
    )
  );
};
