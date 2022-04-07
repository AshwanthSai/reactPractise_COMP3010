import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native-web";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontFamily: Platform.OS === "android" ? "roboto" : "Arial",
  },
});

export default AppText;
