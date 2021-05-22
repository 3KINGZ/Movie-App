/* eslint-disable no-undef */
import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";
import { useSelector, useDispatch } from "react-redux";

import { Movies } from "../components";
import { COLORS, FONTS } from "../styles";
import { searchMovie } from "../actions";
import { scale } from "react-native-size-matters";

export const SearchScreen = ({ navigation }: { navigation: any }) => {
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();

  const { searchResults, loading, message } = useSelector(
    (state: State) => state.search,
  );

  const _searchMovies = () => {
    dispatch(searchMovie(searchString));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AIcon
            style={{ marginRight: 5 }}
            name="arrowleft"
            size={scale(32)}
            color="white"
          />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <AIcon name="search1" size={22} color="white" />
          <TextInput
            style={styles.input}
            onChangeText={text => setSearchString(text)}
            onSubmitEditing={_searchMovies}
          />
        </View>
      </View>
      <Movies data={searchResults} loading={loading} message={message} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    width: "100%",
    paddingHorizontal: 5,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    alignSelf: "center",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    paddingHorizontal: 10,
    alignSelf: "center",
    backgroundColor: COLORS.darkBlue,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    ...FONTS.regular,
    fontSize: 18,
    marginLeft: 5,
  },
  title: {
    ...FONTS.large,
  },
});
