import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, MovieCategory, MovieDetail, SearchScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.MOVIE_CATEGORY} component={MovieCategory} />
      <Stack.Screen name={routes.MOVIE_DETAIL} component={MovieDetail} />
      <Stack.Screen name={routes.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
