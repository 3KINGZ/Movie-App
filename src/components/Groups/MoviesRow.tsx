import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

import routes from "../../navigation/routes";
import { COLORS, FONTS } from "../../styles";
import { MovieRow } from "../Cards";
import { Loading } from "../Loading";
import { Error } from "../Error";

interface IMoviesRow {
  headerTitle: string;
  data: any;
  loading: boolean;
  message?: null | string;
  retryAction?: any;
}

export const MoviesRow = ({
  headerTitle,
  data,
  loading,
  message,
  retryAction = null,
}: IMoviesRow) => {
  const navigation = useNavigation();

  return loading && !data ? (
    <Loading />
  ) : message ? (
    <Error action={retryAction} />
  ) : (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.MOVIE_CATEGORY)}>
          <Text style={styles.headerLink}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MovieRow movie={item} />}
        showsHorizontalScrollIndicator={false}
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
