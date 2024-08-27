import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default function TodayPlan({}) {
  return (
    <View style={styles.planContainer}>
      <Text style={styles.sectionTitle}>Plan del dia</Text>
    </View>
  );
}
