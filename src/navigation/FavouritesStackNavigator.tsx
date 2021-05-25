/* eslint-disable react/display-name */
import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

import { Favourites } from "../screens";
import routes from "./routes";
import { COLORS, FONTS } from "../styles";

const Stack = createStackNavigator();

const FavouritesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: COLORS.primary } }}>
      <Stack.Screen
        name={routes.FAVOURITES_SCREEN}
        options={({ navigation }) => ({
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerTintColor: COLORS.textColor,
          headerTitleStyle: { ...FONTS.large },
        })}
        component={Favourites}
      />
    </Stack.Navigator>
  );
};

export default FavouritesStackNavigator;
