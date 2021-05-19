/* eslint-disable no-undef */
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import StarRating from "react-native-star-rating";

import { posterUrl } from "../../constants";
import { mapGenres, parseRating } from "../../utils";
import routes from "../../navigation/routes";
import { scale } from "react-native-size-matters";
import { COLORS, FONTS } from "../../styles";

export const Movie = ({ movie }: { movie: IMovie }) => {
  const navigation = useNavigation();

  const { id, title, poster_path, genre_ids, vote_average } = movie;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.MOVIE_DETAIL, { id })}>
      <View style={styles.container}>
        <Image source={{ uri: posterUrl + poster_path }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingContainer}>
            <StarRating
              starSize={18}
              disabled={false}
              maxStars={5}
              rating={parseRating(Number(vote_average))}
              fullStarColor="gold"
              emptyStarColor="grey"
            />
            <Text style={styles.rating}>{vote_average}</Text>
          </View>
          <Text style={styles.genres}>{mapGenres(genre_ids)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale(150),
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center",
    backgroundColor: COLORS.darkBlue,
    borderRadius: 20,
    overflow: "hidden",
  },
  infoContainer: {
    paddingHorizontal: 10,
  },
  image: {
    width: scale(130),
    height: scale(150),
  },
  title: {
    ...FONTS.regular,
    fontWeight: "bold",
    width: "80%",
    marginVertical: 5,
  },
  ratingContainer: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rating: {
    ...FONTS.mini,
    paddingLeft: 5,
    opacity: 0.7,
  },
  genres: {
    ...FONTS.mini,
    opacity: 0.7,
    marginVertical: 5,
  },
});
