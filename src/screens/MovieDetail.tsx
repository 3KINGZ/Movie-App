import React from "react";
import { View, Text } from "react-native";

export const MovieDetail = ({ route }: any) => {
  const { id } = route.params;

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};
