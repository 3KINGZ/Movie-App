import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import StarRating from "react-native-star-rating";
import { scale } from "react-native-size-matters";

import { posterURL } from "../../constants";
import { COLORS, FONTS } from "../../styles";
import { mapGenres, parseRating } from "../../utils";
import { FavouriteButton } from "../FavouriteButton";
import routes from "../../navigation/routes";

export const Movie = ({ movie }: { movie: any }) => {
  const navigation = useNavigation();

  const { id, title, poster_path, genre_ids, vote_average } = movie;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.MOVIE_DETAIL, { id })}>
      <View style={styles.container}>
        <Image source={{ uri: posterURL + poster_path }} style={styles.image} />

        <View style={styles.infoContainer}>
          <View style={styles.favBtnContainer}>
            <FavouriteButton movie={movie} />
          </View>

          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>

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

          <Text style={styles.genres} numberOfLines={2}>
            {mapGenres(genre_ids)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const MemoizedMovie = React.memo(Movie);

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
  image: {
    width: scale(130),
    height: scale(150),
    resizeMode: "cover",
  },
  infoContainer: {
    width: "60%",
    paddingHorizontal: 10,
  },
  favBtnContainer: { alignSelf: "flex-end" },
  title: {
    ...FONTS.regular,
    fontWeight: "bold",
    maxWidth: "70%",
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
    maxWidth: "70%",
  },
});
