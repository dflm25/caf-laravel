import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import CalendarStrip from "react-native-calendar-strip";

import ItemExcercise from "../../components/itemExercise";

import { exercisesMockData } from "../../../__mock__";
import styles from "./styles";

export default function Routine() {
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <CalendarStrip
            style={styles.calendar}
            calendarColor={styles.terciary}
            calendarHeaderStyle={{ color: "white" }}
            dateNumberStyle={{ color: "white" }}
            dateNameStyle={{ color: "white" }}
            iconContainer={{ flex: 0.1 }}
          />
        </SafeAreaView>
      </View>
      <Text style={styles.title}>Plan del dia</Text>
      <ScrollView
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {exercisesMockData.map((item) => (
          <ItemExcercise data={item} />
        ))}
      </ScrollView>
    </>
  );
}
