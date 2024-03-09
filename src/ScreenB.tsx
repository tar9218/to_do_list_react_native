import { StyleSheet, Text, View } from "react-native";
import React from "react";

function ScreenB() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
    </View>
  );
}

export default ScreenB;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
