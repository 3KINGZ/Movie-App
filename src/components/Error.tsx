import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { FONTS } from "../styles";

export const Error = ({ action }: { action?: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>...Oops An error occurred</Text>

      {action && (
        <View style={styles.buttonContainer}>
          <Button title="Try again" onPress={action} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  errorText: {
    ...FONTS.large,
    textAlign: "center",
    marginTop: 10,
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
  },
});
