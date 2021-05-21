import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Loading, Movies, Filter } from "../components";
import { category } from "../constants";
import { COLORS } from "../styles";
import { _getMovieCategory } from "../actions";

export const MovieCategory = () => {
  const [filter, setFilter] = useState({
    id: "1",
    title: "now_playing",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_getMovieCategory(filter.title));
  }, [filter]);

  const { genres, loading } = useSelector(state => state.movies);

  return (
    <View style={styles.container}>
      <Text>Movie Category</Text>
      <Filter
        filterData={category}
        filterString={filter.title}
        action={setFilter}
      />
      {loading ? <Loading /> : <Movies data={genres?.[filter.title]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
  },
});
