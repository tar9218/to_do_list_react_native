import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../utils/CustomButton.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if(name.length == 0 || age.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
    }else {
      try {
        let user = {
          Name: name,
          Age: age
        }
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('Home');
      }catch (error){
        console.log(error)
      }
    }
  }

  return (
    <View style={styles.body}>
      <Image
       style={styles.logo}
       source={require('../../assets/asyncstorage.png')}
      />
      <Text style={styles.text}>
        Async Storage
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your name'
        onChangeText={(value) => setName(value)}
      />

      <TextInput
        style={styles.input}
        placeholder='Enter your age'
        onChangeText={(value) => setAge(value)}
      />
      <CustomButton
        title='Login'
        color='#1eb900'
        onPressFunction={setData}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
    marginBottom: 130
  },
  text: {
    fontSize: 20,
    color: '#ffffff'
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10
  }
});
