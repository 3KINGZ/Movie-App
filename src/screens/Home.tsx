import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { _getMovieCategory, _getMovieGenre } from "../actions/movie";
import { MoviesRow, Filter, Movies, Header } from "../components";
import { genreArr } from "../constants";
import { COLORS, FONTS } from "../styles";

interface IFilter {
  id: string;
  title: string;
}

export const Home = () => {
  const dispatch = useDispatch();

  const { genres, loading, message } = useSelector(
    (state: State) => state.movies,
  );

  const [filter, setFilter] = useState<IFilter>({
    id: "28",
    title: "Action",
  });

  useEffect(() => {
    getMC();
  }, []);

  useEffect(() => {
    getMG();
  }, [filter]);

  const getMC = () => {
    dispatch(_getMovieCategory("now_playing"));
  };

  const getMG = () => {
    dispatch(_getMovieGenre(filter.title, filter.id));
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <MoviesRow
          headerTitle="Now Playing"
          data={genres?.["now_playing"]}
          loading={loading}
          message={message}
          retryAction={getMC}
        />

        <View style={styles.genresContainer}>
          <Text style={styles.genreTitle}>Genres</Text>
          <Filter
            action={setFilter}
            filterString={filter.title}
            filterData={genreArr}
          />
          <Movies
            data={genres[filter.title]}
            loading={loading}
            message={message}
            retryAction={getMG}
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
