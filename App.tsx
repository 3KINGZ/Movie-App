import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import AppStack from "./src/navigation/AppStackNavigator";
import { COLORS } from "./src/styles";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
