import React from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { Movie } from "../Cards/Movie";

interface IMovies {
  data: IMovies[];
  loading: boolean;
}

export const Movies = ({ data, loading }: IMovies) => {
  return loading && !data ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="red" />
    </View>
  ) : (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Movie movie={item} />}
      getItemLayout={(data, index) => ({
        length: 150,
        offset: 150 * index,
        index,
      })}
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
