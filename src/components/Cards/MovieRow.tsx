/* eslint-disable no-undef */
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { posterUrl } from "../../constants";
import { FONTS } from "../../styles";
import routes from "../../navigation/routes";
import { mapGenres } from "../../utils";
import { scale } from "react-native-size-matters";

interface IMovieRow {
  movie: IMovie;
}

export const MovieRow = ({ movie }: IMovieRow) => {
  const navigation = useNavigation();

  const { id, title, poster_path, genre_ids } = movie;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.MOVIE_DETAIL, { id })}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: posterUrl + poster_path,
          }}
        />
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.genre} numberOfLines={1}>
          {mapGenres(genre_ids)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 7,
    width: scale(150),
  },
  image: {
    width: scale(150),
    height: scale(150),
    borderRadius: 15,
  },
  title: {
    ...FONTS.small,
    marginTop: 5,
    fontWeight: "bold",
  },
  genre: {
    ...FONTS.tiny,
    marginTop: 2,
  },
});
