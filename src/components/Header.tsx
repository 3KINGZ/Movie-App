import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FIcon from "react-native-vector-icons/Feather";
import AIcon from "react-native-vector-icons/AntDesign";
import IIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";

import routes from "../navigation/routes";
import { IconContainer } from "./IconContainer";

export const Header = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IconContainer>
          <FIcon name="menu" size={22} color="white" />
        </IconContainer>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(routes.SEARCH)}>
          <IconContainer>
            <AIcon
              style={styles.button}
              name="search1"
              size={22}
              color="white"
            />
          </IconContainer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.FAVOURITES)}>
          <IconContainer>
            <IIcon
              style={styles.button}
              name="notifications"
              size={22}
              color="white"
            />
          </IconContainer>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
