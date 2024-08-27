import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";
import UserAvatar from "react-native-user-avatar";

import ItemMenu from "../../components/itemMenu";
import { menus } from "./constants";
import styles from "./styles";

const ProfileScreen = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  });

  return (
    <>
      <View style={styles.topHeader}></View>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerProfileContainer}>
            <UserAvatar size={80} name={user.name} textColor="#000" />
            <View style={styles.textContainer}>
              <Text>Daniel Lucumi</Text>
              <Text>Daniel Lucumi</Text>
            </View>
          </View>
          <View style={styles.resumenContainer}>
            <View style={styles.resumenItem}></View>
            <View style={styles.resumenItem}></View>
            <View style={styles.resumenItem}></View>
          </View>
        </View>
        <ScrollView>
          {menus.map((item) => (
            <ItemMenu {...item} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
