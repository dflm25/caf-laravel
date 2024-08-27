import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import styles from "./styles";

export default function ItemMenu({ label, route }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log()}>
      <Text style={styles.label}>{label}</Text>
      <AntDesign name="right" size={24} color="#EEEEEE" />
    </TouchableOpacity>
  );
}
