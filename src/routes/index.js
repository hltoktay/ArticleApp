import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import BookingApp from "../index";
import Articles from "../component/Articles";
import Settings from "../component/Articles";

const AppStack = createStackNavigator({
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

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AuthStack,
      Auth: AppStack
    },
    {
      initialRouteName: "App"
    }
  )
);

