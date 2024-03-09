import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../utils/CustomButton.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from "react-redux";
import {setName, setAge} from "../redux/actions";

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {console.log(error)}
);
export default function Login({navigation}) {
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

  useEffect(() => {
    createTable()
    getData();
  }, [])


  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "Users "
        + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
      )
    })
  }

  const getData = () => {
    try {
      // AsyncStorage.getItem('UserData').then(value => {
      //   if (value != null) {
      //     navigation.navigate('Home');
      //   }
      // });

      db.transaction((tx) => {
        tx.executeSql(
          "SELECT Name, Age FROM Users",
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              navigation.navigate('Home');
            }
          }
        )
      })
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if(name.length == 0 || age.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
    }else {
      try {
        dispatch(setName(name));
        dispatch(setAge(age));
        // let user = {
        //   Name: name,
        //   Age: age
        // }
        // await AsyncStorage.setItem('UserData', JSON.stringify(user));

        await db.transaction(async (tx) => {
          // await tx.executeSql(
          //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
          // );
          await tx.executeSql(
            "INSERT INTO Users (Name, Age) VALUES (?,?)",
            [name, age]
          );
        })
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
       source={require('../../assets/redux.png')}
      />
      <Text style={styles.text}>
        Redux
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your name'
        onChangeText={(value) => dispatch(setName(value))}
      />

      <TextInput
        style={styles.input}
        placeholder='Enter your age'
        onChangeText={(value) => dispatch(setAge(value))}
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
