import React from "react";
import { ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <ActivityIndicator style={{ alignSelf: "center" }} size={50} color="red" />
  );
};
