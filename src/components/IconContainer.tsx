import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles";

export const IconContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkBlue,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
