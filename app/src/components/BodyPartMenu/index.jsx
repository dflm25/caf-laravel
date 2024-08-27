import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const bodyParts = [
  {
    name: "Brazos",
    image: require("../../../assets/gimnasio.png"),
  },
  {
    name: "Piernas",
    image: require("../../../assets/gimnasio.png"),
  },
  {
    name: "Espalda",
    image: require("../../../assets/gimnasio.png"),
  },
  {
    name: "Abdomen",
    image: require("../../../assets/gimnasio.png"),
  },
  {
    name: "Pecho",
    image: require("../../../assets/gimnasio.png"),
  },
];

const BodyPartMenu = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Conocer algunos ejercicios</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {bodyParts.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.circle}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.label}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    padding: 15,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40, // Hace que el contenedor sea un círculo
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3, // Para sombra en Android
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
});

export default BodyPartMenu;
