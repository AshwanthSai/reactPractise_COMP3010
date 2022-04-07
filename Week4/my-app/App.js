import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "./App/assets/components/AppButton";
import AppText from "./App/assets/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppColor from "./App/assets/config/AppColor";
import AppScreen from "./App/assets/components/AppScreen";

export default function App() {
  return (
    <AppScreen style={styles.container}>
        <Text>Hi Ashwanth Sai</Text>  
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "white",
  },

});
