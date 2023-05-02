import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Productname from "./Productname";

export default function Productprice() {
  return (
    <ScrollView Style={styles.items}>
      <Productname
        name="nike"
        price="599.95"
        imageSrc={require("./assets/nike.jpg")}
      />
      <Productname
        name="Adidas"
        price="499.99"
        imageSrc={require("./assets/adidas.jpg")}
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  items: {
    padding: 16,
  },
});
