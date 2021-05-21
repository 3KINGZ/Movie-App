import React, { useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";

import { COLORS, FONTS } from "../styles";
interface IFilterCard {
  filter: { id: string; title: string };
  active: boolean;
  action(filterId: { id: string; title: string }): any;
}

interface IFilter {
  action: () => any;
  filterString: string;
  filterData: [];
}

const FilterCard = ({ filter, active, action }: IFilterCard) => {
  return (
    <TouchableOpacity
      onPress={() => action({ id: filter.id, title: filter.title })}>
      <View
        style={
          active ? styles.filterCardContainerActive : styles.filterCardContainer
        }>
        <Text style={styles.FilterCardText}>{filter.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Filter = ({ action, filterString, filterData }: IFilter) => {
  const renderItem = useCallback(
    ({ item }) => (
      <FilterCard
        filter={item}
        active={filterString === item.title}
        action={action}
      />
    ),
    [filterString],
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={filterData}
        keyExtractor={item => item[0]}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  filterCardContainer: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
    borderRadius: 20,
    backgroundColor: COLORS.darkBlue,
    margin: 5,
  },
  filterCardContainerActive: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    margin: 5,
  },
  FilterCardText: {
    ...FONTS.mini,
  },
});
