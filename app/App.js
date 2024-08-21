import "react-native-gesture-handler"; // Importa primero
import React from "react";
import { View, ActivityIndicator } from "react-native";
import AppNavigator from "./src/routes";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    Medium: require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    Bold: require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return <AppNavigator />;
}
