import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

import routes from "../../navigation/routes";
import { COLORS, FONTS } from "../../styles";
import { MovieRow } from "../Cards";

interface IMoviesRow {
  headerTitle: string;
  data: any;
  loading: boolean;
}

export const MoviesRow = ({ headerTitle, data, loading }: IMoviesRow) => {
  const navigation = useNavigation();

  return loading && !data ? (
    <View
      style={{
        height: 170,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <ActivityIndicator size="large" color="red" />
    </View>
  ) : (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.MOVIE_LIST)}>
          <Text style={styles.headerLink}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MovieRow movie={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    alignItems: "center",
  },
  headerTitle: {
    ...FONTS.large,
    marginLeft: 5,
  },
  headerLink: {
    ...FONTS.mini,
    color: COLORS.secondary,
  },
});
