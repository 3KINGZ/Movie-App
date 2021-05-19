import React from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { COLORS } from "../../styles";
import { Movie } from "../Cards/Movie";

interface IMovies {
  data: IMovies[];
  loading: boolean;
}

export const Movies = ({ data, loading }: IMovies) => {
  return loading && !data?.length ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.secondary} />
    </View>
  ) : (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Movie movie={item} />}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    width: "100%",
    height: scale(300),
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    paddingHorizontal: 7,
  },
});
