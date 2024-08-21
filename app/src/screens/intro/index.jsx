import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "Welcome to MyApp",
    text: "This is the first step of your journey",
    image: require("../../../assets/3.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Track Your Progress",
    text: "We help you track your daily progress",
    image: require("../../../assets/icon.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Stay Motivated",
    text: "Stay motivated with our tips and tricks",
    image: require("../../../assets/icon.png"),
    backgroundColor: "#22bcb5",
  },
];

const AppIntro = ({ navigation }) => {
  const _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    // Navegar a la pantalla principal de la app
    navigation.replace("Home");
  };

  return (
    <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
});

export default AppIntro;
