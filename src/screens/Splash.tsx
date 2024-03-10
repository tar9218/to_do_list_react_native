import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import GlobalStyle from "../utils/GlobalStyle";


export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('My Tasks');
    },2000)
  }, [])

  return (
    <View style={styles.body}>
      <Image
         style={styles.logo}
         source={require('../../assets/checklist.png')}
      />
      <Text style={[
        GlobalStyle.CustomFontBig,
        styles.text
      ]}>
        Taron To-Do List
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: '#ffffff',
  },
});
