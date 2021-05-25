import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderBackButton } from "@react-navigation/stack";

import { Movies, Filter } from "../components";
import { category } from "../constants";
import { COLORS, FONTS } from "../styles";
import { _getMovieCategory } from "../actions";
import routes from "../navigation/routes";

export const MovieCategory = ({ navigation }: any) => {
  const [filter, setFilter] = useState({
    id: "1",
    title: "now_playing",
  });

  const dispatch = useDispatch();

  const { genres, loading, message } = useSelector(
    (state: State) => state.movies,
  );

  useEffect(() => {
    if (!genres?.[filter.title]) {
      getMC();
    }
  }, [filter]);

  const getMC = () => {
    dispatch(_getMovieCategory(filter.title));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(routes.HOME)}>
        <View style={styles.headerContainer}>
          <View>
            <HeaderBackButton tintColor="white" />
          </View>

          <Text style={styles.headerText}>Category</Text>
        </View>
      </TouchableOpacity>

      <Filter
        filterData={category}
        filterString={filter.title}
        action={setFilter}
      />
      <Movies
        loading={loading}
        data={genres?.[filter.title]}
        message={message}
        retryAction={getMC}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    ...FONTS.large,
  },
});
