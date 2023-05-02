import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export default function Productname({ name, price, imageSrc }) {
  const [itemCount, setitemCount] = useState(0);

  function handleitem() {
    setitemCount(itemCount + 1);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Price per unit: M{price}</Text>
        {imageSrc ? (
           <Image style={styles.image} source={imageSrc} />
        ) : null}
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleitem}>
            <View style={styles.button}>
              <AntDesign name="shoppingcart" size={24} color={itemCount > 0 ? "#1877F2" : "#9E9E9E"} />
              <Text style={{ marginLeft: 5 }}>item</Text>
            </View>
          </TouchableOpacity>
          <Text>{itemCount} items Total price: M{price * itemCount}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    color: 'gray',
  },
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  button: {
    flexDirection: "row",
  },
  footer: {
    borderTopColor: "#aaa",
    borderTopWidth: 1,
    marginTop: 15,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
