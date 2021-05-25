import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStackNavigator from "./HomeStackNavigator";
import FavouritesStackNavigator from "./FavouritesStackNavigator";
import routes from "./routes";
import { COLORS, FONTS } from "../styles";

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: COLORS.primary,
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: COLORS.textColor,
        activeBackgroundColor: COLORS.darkBlue,
        inactiveBackgroundColor: COLORS.primary,
        inactiveTintColor: COLORS.textColor,
        labelStyle: { ...FONTS.semiRegular },
      }}>
      <Drawer.Screen name={routes.HOME_STACK} component={HomeStackNavigator} />
      <Drawer.Screen
        name={routes.FAVOURITES}
        component={FavouritesStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
