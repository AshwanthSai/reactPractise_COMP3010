import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

function AppScreen({ children, styles }) {
  return (
    <SafeAreaView style={[styles.screen, styles]}>
        {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default AppScreen;
