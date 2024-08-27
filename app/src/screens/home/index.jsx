import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

import HeaderProfile from "../../components/headerProfile";
import BodyPartMenu from "../../components/BodyPartMenu";
import TodayPlan from "../../components/todayPlan";

const HomeScreen = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <HeaderProfile />
        <BodyPartMenu />
        <TodayPlan />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "red",
  },
});

export default HomeScreen;
