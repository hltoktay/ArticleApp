import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import BookingApp from "../index";
import Articles from "../component/Articles";
import Settings from "../component/Settings";
import Maps from "../component/Maps";
import ArticleItem from "../component/ArticleItem";
import News from "../component/News";

export const ArticleStack = createStackNavigator({
  Item: ArticleItem,
  Article: Articles,
  New: News
});

export const TabNavigator = createBottomTabNavigator(
  {
    Article: News,
    Map: Maps,
    Setting: Settings
  },
  {
    tabBarOptions: {
      activeTintColor: "#fff",
      showLabel: false,
      activeBackgroundColor: "#ffa500",
      inactiveBackgroundColor: "#fdf4e4",
      style: {
        backgroundColor: "#fdf4e4"
      }
    },
    initialRouteName: "Article",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Map") {
          iconName = `md-map`;
        } else if (routeName === "Setting") {
          iconName = `ios-settings`;
        } else if (routeName === "Article") {
          iconName = `md-apps`;
        }

        return <Ionicons name={iconName} size={24} />;
      }
    })
  }
);

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
        Auth: AuthStack,
        Home: TabNavigator,
        Item: ArticleStack
      },
      {
        initialRouteName: "Home"
      }
    )
  );
};
