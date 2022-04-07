import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-web";

export default function AppButton({ title }) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
