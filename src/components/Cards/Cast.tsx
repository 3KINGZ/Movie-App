import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { posterURL } from "../../constants";
import { FONTS } from "../../styles";

export const Cast = ({ cast }: any) => {
  const { profile_path, original_name } = cast;

  return (
    <View style={styles.container}>
      <Image source={{ uri: posterURL + profile_path }} style={styles.image} />
      <Text style={styles.name}>{original_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 100,
    marginRight: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    marginTop: 3,
    ...FONTS.regular,
    fontSize: scale(12),
    textAlign: "center",
  },
});
