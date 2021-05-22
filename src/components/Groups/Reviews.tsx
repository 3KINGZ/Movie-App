/* eslint-disable no-undef */
import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

import { FONTS } from "../../styles";
import { Review } from "../Cards/Review";

export const Reviews = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <FlatList
      ListHeaderComponent={<Text style={styles.headerTitle}>Reviews</Text>}
      style={styles.reviews}
      data={reviews}
      renderItem={({ item }) => <Review review={item} />}
    />
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    ...FONTS.semiXlarge,
  },
  reviews: {
    marginTop: 5,
    paddingBottom: 10,
  },
});
