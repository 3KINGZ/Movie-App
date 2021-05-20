/* eslint-disable no-undef */
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { COLORS, FONTS } from "../../styles";
import { parseAuthorImage, formatDate } from "../../utils";

export const Review = ({ review }: { review: IReview }) => {
  const { author, author_details, content, created_at } = review;

  const { avatar_path } = author_details;

  return (
    <View style={styles.container}>
      <View style={styles.authorInfoContainer}>
        <Image
          style={styles.authorImage}
          source={{ uri: parseAuthorImage(avatar_path) }}
        />
        <View>
          <Text style={styles.authorName}>{author}</Text>
          <Text style={styles.date}>{formatDate(created_at)}</Text>
        </View>
      </View>
      <Text style={styles.content} numberOfLines={7}>
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
    width: "100%",
    backgroundColor: COLORS.darkBlue,
    marginVertical: 5,
    overflow: "hidden",
    borderRadius: 30,
  },
  authorInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorImage: {
    width: scale(30),
    height: scale(30),
    borderRadius: 10,
    marginRight: 10,
  },
  authorName: {
    ...FONTS.regular,
    fontSize: scale(15),
  },
  date: {
    ...FONTS.mini,
    opacity: 0.3,
  },
  content: {
    ...FONTS.regular,
    fontSize: scale(15),
    lineHeight: 25,
    marginVertical: 10,
    opacity: 0.5,
  },
});
