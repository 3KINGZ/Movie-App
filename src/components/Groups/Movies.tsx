import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { Movie } from "../Cards/Movie";
import { Error } from "../Error";
import { Loading } from "../Loading";

interface IMovies {
  data: any;
  loading?: boolean;
  message?: any;
  retryAction?: any;
}

export const Movies = ({
  data,
  loading,
  message,
  retryAction = null,
}: IMovies) => {
  return loading && !data ? (
    <Loading />
  ) : message ? (
    <Error action={retryAction} />
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
