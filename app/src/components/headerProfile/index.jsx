import React from "react";
import { View, Text } from "react-native";
import UserAvatar from "react-native-user-avatar";
import Ionicons from "@expo/vector-icons/Ionicons";

import getRandomPhrase from "../../utilities/phrase";
import styles from "./styles";

export default function HeaderProfile({}) {
  return (
    <View style={styles.HeaderProfileContainer}>
      <UserAvatar size={52} name="Daniel Lucumi Marin" />
      <View style={styles.headerTextContainer}>
        <Text style={styles.nameLabel}>HeaderProfile</Text>
        <Text style={styles.phraseLabel}>{getRandomPhrase()}</Text>
      </View>
      <Ionicons name="notifications" size={24} color="black" />
    </View>
  );
}
