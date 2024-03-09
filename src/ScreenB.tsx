import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

function ScreenB({navigation, route}) {
  const {itemName, itemId} = route.params;
  const onPressHandler = () => {
    navigation.navigate('ScreenA', {Message: 'message from B'})
    // navigation.goBack();
    // navigation.setParams({itemId: 14});
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
      >
        <Text style={styles.text}>Go Back to Screen A</Text>
      </Pressable>
      <Text style={styles.text}>Item Name: {itemName} ID:{itemId}</Text>
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
