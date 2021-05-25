/* eslint-disable no-undef */
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { COLORS } from "./src/styles";
import AppDrawerNavigator from "./src/navigation/AppDrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <AppDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
