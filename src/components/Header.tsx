import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FIcon from "react-native-vector-icons/Feather";
import AIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/core";

import routes from "../navigation/routes";

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FIcon name="menu" size={22} color="white" />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <AIcon style={styles.button} name="search1" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.FAVOURITES)}>
          <AIcon style={styles.button} name="heart" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 5,
  },
});
