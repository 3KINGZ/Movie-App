import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { FONTS } from "../../styles";

import { Cast } from "../Cards";

export const Casts = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>The Cast</Text>
      <FlatList
        style={styles.list}
        horizontal
        data={data}
        renderItem={({ item }) => <Cast cast={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  headerTitle: {
    ...FONTS.semiXlarge,
  },
  list: {
    marginTop: 5,
  },
});
