import {StatusBar,StyleSheet,Text,View,Image,Button,Pressable,} from "react-native";
import Header from "./productcomponents/Header"
import Productprice from "./productcomponents/Productprice";
import Productname from "./productcomponents/Productname";
import React, { useState } from 'react';

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <Productprice />
      <Productname/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
