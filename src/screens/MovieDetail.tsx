/* eslint-disable no-undef */
import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import YoutubePlayer from "react-native-youtube-iframe";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/AntDesign";

import { _getMovieDetail } from "../actions";
import { COLORS, FONTS } from "../styles";
import { parseRating, mapGenresDetail } from "../utils";
import { scale } from "react-native-size-matters";
import { Casts, Reviews } from "../components";

const Divider = () => <View style={styles.divider} />;

export const MovieDetail = ({ route, navigation }: any) => {
  const { id } = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_getMovieDetail(id));
  }, []);

  const {
    movieDetail = {},
    movieCast = [],
    loading,
    message,
    reviews,
  } = useSelector((state: State) => state.movieDetail);

  const {
    title,
    videos = {
      results: [],
    },
    genres = [],
    overview,
    vote_average,
    runtime,
  } = movieDetail;

  return loading ? (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <ActivityIndicator color="red" size="large" />
    </View>
  ) : message ? (
    <Text>{message}</Text>
  ) : (
    <View style={styles.container}>
      <View>
        <View style={{ elevation: 0 }}>
          <YoutubePlayer
            height={200}
            play={false}
            videoId={videos?.results[0]?.key}
            webViewStyle={{ zIndex: 1 }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="heart" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
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
        </View>

        <View style={styles.genreContainer}>
          <Text style={styles.genre}>{mapGenresDetail(genres)}</Text>
          <Divider />
          <Text style={styles.runtime}>Runtime: {runtime} mins</Text>
        </View>

        <View>
          <Text numberOfLines={5} style={styles.overview}>
            {overview}
          </Text>
        </View>

        <Casts data={movieCast} />

        <Reviews reviews={reviews} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  buttonContainer: {
    padding: 15,
    width: "100%",
    elevation: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    ...FONTS.semiXlarge,
    fontWeight: "bold",
    width: "60%",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  genreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rating: {
    ...FONTS.small,
    paddingLeft: 5,
  },
  genre: {
    ...FONTS.regular,
    fontSize: scale(12),
    opacity: 0.6,
  },
  runtime: {
    ...FONTS.regular,
    fontSize: scale(12),
    opacity: 0.6,
  },
  overview: {
    ...FONTS.regular,
    fontSize: scale(15),
    lineHeight: 25,
    marginVertical: 5,
  },
  divider: {
    borderColor: COLORS.textColor,
    borderLeftWidth: 1,
    height: 10,
    marginHorizontal: 5,
    opacity: 0.5,
  },
});
