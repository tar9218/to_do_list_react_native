import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyle from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from "../utils/CustomButton.tsx";

function Home({navigation, route}) {
  const [name, setName] = useState();
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          let user = JSON.parse(value)
          setName(user.Name);
          setAge(user.Age);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if(name.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
    }else {
      try {
        let user = {
          Name: name
        }
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        Alert.alert('Success!', 'Your data has been updated.');
      }catch (error){
        console.log(error)
      }
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('UserName');
      Alert.alert('Success!', 'Your data has been removed.');
      navigation.navigate('Login');
    }catch (error){
      console.log(error)
    }
  }

  return (
    <View style={styles.body}>
      <Text style={[styles.text, GlobalStyle.CustomFont]}>Welcome {name}</Text>
      <Text style={[styles.text, GlobalStyle.CustomFont]}>You age is {age}</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder='Enter your name'
        onChangeText={(value) => setName(value)}
      />
      <CustomButton
        title='Update'
        color='#ff7f00'
        onPressFunction={updateData}
      />

      <CustomButton
        title='Remove'
        color='#f40100'
        onPressFunction={removeData}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
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
    marginTop: 130,
    marginBottom: 10
  }
});
