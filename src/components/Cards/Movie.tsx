/* eslint-disable no-undef */
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/AntDesign";
import { useSelector, useDispatch } from "react-redux";
import { scale } from "react-native-size-matters";

import { posterURL } from "../../constants";
import { COLORS, FONTS } from "../../styles";
import routes from "../../navigation/routes";
import { mapGenres, parseRating } from "../../utils";
import { addToBookmark, deleteFromBookmark } from "../../actions";

export const Movie = ({ movie }: { movie: any }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { bookmarksMap } = useSelector((state: State) => state.bookmarks);

  const { id, title, poster_path, genre_ids, vote_average } = movie;

  const _deleteFromBookmark = () => {
    dispatch(deleteFromBookmark(id));
  };

  const _addToBookmark = () => {
    dispatch(addToBookmark(movie));
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.MOVIE_DETAIL, { id })}>
      <View style={styles.container}>
        <Image source={{ uri: posterURL + poster_path }} style={styles.image} />

        <View style={styles.infoContainer}>
          {bookmarksMap?.[id] ? (
            <TouchableOpacity onPress={_deleteFromBookmark}>
              <Icon
                name="heart"
                size={24}
                color="white"
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={_addToBookmark}>
              <Icon
                name="heart"
                size={24}
                color="white"
                style={styles.addIcon}
              />
            </TouchableOpacity>
          )}

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
  addIcon: { alignSelf: "flex-end", opacity: 0.5 },
  deleteIcon: { alignSelf: "flex-end" },
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
