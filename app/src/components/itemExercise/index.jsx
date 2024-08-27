import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

export default function ItemExcercise({}) {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={require("../../../assets/exercises/pushup.jpg")}
        style={styles.imageItem}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Push up's</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.label}>Series:</Text>
          <Text style={styles.number}>4</Text>
          <Text style={styles.label}>Repeticiones:</Text>
          <Text style={styles.number}>10</Text>
        </View>
      </View>
      <View style={styles.levelContainer}>
        <Text style={styles.levelLabel}>Principiante</Text>
      </View>
    </View>
  );
}
