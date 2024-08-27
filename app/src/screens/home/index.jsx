import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import HeaderProfile from "../../components/headerProfile";
import BodyPartMenu from "../../components/BodyPartMenu";
import TodayPlan from "../../components/todayPlan";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderProfile />
      <BodyPartMenu />
      <TodayPlan />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default HomeScreen;
