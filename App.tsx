import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppDrawerNavigator from "./src/navigation/AppDrawerNavigator";
import { COLORS } from "./src/styles";
import { useCache } from "./src/hooks";
import { navigationTheme } from "./src/styles/navigationTheme";

const App = () => {
  useCache();

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <AppDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
