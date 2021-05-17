import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, MovieList, MovieDetail } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.MOVIE_LIST} component={MovieList} />
      <Stack.Screen name={routes.MOVIE_DETAIL} component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default AppStack;
