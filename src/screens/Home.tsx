/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { _getMovieCategory, _getMovieGenre } from "../actions/movie";
import { MoviesRow, Filter, Movies, Header } from "../components";
import { COLORS, FONTS } from "../styles";

interface IFilter {
  genreId: string;
  genre: string;
}

export const Home = () => {
  const dispatch = useDispatch();

  const { genres, loading } = useSelector((state: State) => state.movies);

  const [filter, setFilter] = useState<IFilter>({
    genreId: "28",
    genre: "Action",
  });

  useEffect(() => {
    dispatch(_getMovieCategory("now_playing"));
  }, []);

  useEffect(() => {
    dispatch(_getMovieGenre(filter.genre, filter.genreId));
  }, [filter]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <MoviesRow
          headerTitle="Now Playing"
          data={genres?.["now_playing"]}
          loading={loading}
        />

        <View style={styles.genresContainer}>
          <Text style={styles.genreTitle}>Genres</Text>
          <Filter action={setFilter} filterString={filter.genre} />
          <Movies data={genres[filter.genre]} loading={loading} />
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
