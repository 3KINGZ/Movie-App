/* eslint-disable no-undef */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Movies } from "../components";
import { COLORS, FONTS } from "../styles";

export const Favourites = () => {
  const { bookmarks, bookmarksMap } = useSelector(
    (state: State) => state.bookmarks,
  );

  console.log("comp", bookmarksMap);

  return (
    <View style={styles.container}>
      {!bookmarks.length ? (
        <Text style={styles.message}>
          ...Oops You haven't added any movie to favourite list yet
        </Text>
      ) : (
        <Movies data={bookmarks} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingLeft: 10,
  },
  headerText: {
    ...FONTS.large,
  },
  message: {
    ...FONTS.large,
    textAlign: "center",
  },
});
