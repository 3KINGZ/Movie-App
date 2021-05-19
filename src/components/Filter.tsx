import React, { useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";

import { genres } from "../constants";
import { COLORS, FONTS } from "../styles";

const genresArr = Object.entries(genres);

interface IFilterCard {
  filter: [string, string];
  active: boolean;
  action(filterId: { genreId: string; genre: string }): any;
}

interface IFilter {
  action: () => any;
  filterString: string;
}

const FilterCard = ({ filter, active, action }: IFilterCard) => {
  return (
    <TouchableOpacity
      onPress={() =>
        action({ genreId: filter[0].replace("_", ""), genre: filter[1] })
      }>
      <View
        style={
          active ? styles.filterCardContainerActive : styles.filterCardContainer
        }>
        <Text style={styles.FilterCardText}>{filter[1]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Filter = ({ action, filterString }: IFilter) => {
  const renderItem = useCallback(
    ({ item }) => (
      <FilterCard
        filter={item}
        active={filterString === item[1]}
        action={action}
      />
    ),
    [filterString],
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={genresArr}
        keyExtractor={item => item[0]}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  filterCardContainer: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: COLORS.darkBlue,
    margin: 5,
  },
  filterCardContainerActive: {
    padding: scale(10),
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    margin: 5,
  },
  FilterCardText: {
    ...FONTS.mini,
  },
});
