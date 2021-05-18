/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { _getMovieGenre } from "../actions/movie";
import { MoviesRow, Filter } from "../components";
import { COLORS, FONTS } from "../styles";

export const Home = () => {
  const dispatch = useDispatch();

  const {
    movies: { genres },
    loading,
  } = useSelector((state: State) => state);

  const [filterString, setFilterString] = useState<{
    genreId: string;
    genre: string;
  }>({
    genreId: "28",
    genre: "Action",
  });

  useEffect(() => {
    dispatch(_getMovieGenre("now_playing"));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <MoviesRow
          headerTitle="Now Playing"
          data={genres?.["now_playing"]}
          loading={loading}
        />
        <View style={styles.genresContainer}>
          <Text style={styles.genreTitle}>Genres</Text>
          <Filter
            action={(value: any) => setFilterString}
            filterString={filterString.genre}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    marginLeft: 5,
  },
  genresContainer: {
    marginLeft: 5,
    marginTop: 20,
  },
  genreTitle: {
    ...FONTS.large,
  },
});
