import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Trackpants</Text>
      <View style={styles.buttons}>
      <View style={[styles.roundButton, styles.searchButton]}> 
      <AntDesign name="search1" size={20} color="#ffff" />
      </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 10,
    borderBottomColor: "#aaa",
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    
  },
  buttons: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
  roundButton: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#9E9E9E",
    justifyContent: "center",
    alignItems: "center",
  },
  contactButton: {
    backgroundColor: "#C56CDE",
  },
  searchButton: {
    backgroundColor: "#1877F2",
    marginRight: 10,
  },
  
});
