import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStackNavigator";
import { COLORS } from "./src/constants";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
