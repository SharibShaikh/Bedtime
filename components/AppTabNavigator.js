import React, { Component } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ReadStoryScreen from "../screens/ReadStory";
import WriteStory from "../screens/WriteStory";



export const AppTabNavigator = createBottomTabNavigator({
  Write: {
    screen: WriteStory,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/write.png")}
          style={{ width: 50, height: 50 }}
        />
      ),
      tabBarLabel: "Write",
    },
  },
  Read: {
    screen: ReadStoryScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/read.png")}
          style={{ width: 40, height: 40 }}
        />
      ),
      tabBarLabel: "Read",
    },
  },


});
