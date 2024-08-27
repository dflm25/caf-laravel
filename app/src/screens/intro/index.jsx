import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { slides } from "./constants";
import styles from "./styles";

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
    navigation.replace("Home");
  };

  return (
    <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
  );
};

export default AppIntro;
