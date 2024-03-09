import { Alert, Pressable, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyle from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from "../utils/CustomButton.tsx";
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from "react-redux";
import {setName, setAge, increaseAge, getCities} from "../redux/actions";

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => { },
  error => { console.log(error) }
);

function Home({navigation, route}) {
  const {name, age, cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  // const [name, setName] = useState();
  // const [age, setAge] = useState('');

  useEffect(() => {
    getData();
    dispatch(getCities());
  }, [])

  const getData = () => {
    try {
      // AsyncStorage.getItem('UserData').then(value => {
      //   if (value != null) {
      //     let user = JSON.parse(value)
      //     setName(user.Name);
      //     setAge(user.Age);
      //   }
      // });

      db.transaction((tx) => {
        tx.executeSql(
          "SELECT Name, Age FROM Users",
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              var userName = results.rows.item(0).Name;
              var userAge = results.rows.item(0).Age;
              dispatch(setName(userName));
              dispatch(setAge(userAge));
            }
          }
        )
      })
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if(name.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
    }else {
      try {
        // let user = {
        //   Name: name
        // }
        // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));

        db.transaction((tx) => {
          tx.executeSql(
            "UPDATE Users SET Name=?",
            [name],
            () => { Alert.alert('Success!', 'Your data has been updated.') },
            error => { console.log(error) }
          )
        })
      }catch (error){
        console.log(error)
      }
    }
  }

  const removeData = async () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM Users",
          [],
          () => { navigation.navigate('Login') },
          error => { console.log(error) }
        )
      })
      // await AsyncStorage.removeItem('UserName');
      // Alert.alert('Success!', 'Your data has been removed.');
      // navigation.navigate('Login');
    }catch (error){
      console.log(error)
    }
  }

  return (
    <View style={styles.body}>
      <Text style={[styles.text, GlobalStyle.CustomFont]}>Welcome {name}</Text>
      <FlatList
         data={cities}
         renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.country}</Text>
              <Text style={styles.subtitle}>{item.city}</Text>
            </View>
         )}
         keyExtractor={(item, index) => index.toString()}
      />

      {/*<Text style={[styles.text, GlobalStyle.CustomFont]}>You age is {age}</Text>*/}
      {/*<TextInput*/}
      {/*  style={styles.input}*/}
      {/*  value={name}*/}
      {/*  placeholder='Enter your name'*/}
      {/*  onChangeText={(value) =>    dispatch(setName(value))}*/}
      {/*/>*/}
      {/*<CustomButton*/}
      {/*  title='Update'*/}
      {/*  color='#ff7f00'*/}
      {/*  onPressFunction={updateData}*/}
      {/*/>*/}

      {/*<CustomButton*/}
      {/*  title='Remove'*/}
      {/*  color='#f40100'*/}
      {/*  onPressFunction={removeData}*/}
      {/*/>*/}

      {/*<CustomButton*/}
      {/*  title='Increase Age'*/}
      {/*  color='#0080ff'*/}
      {/*  onPressFunction={() => {dispatch(increaseAge())}}*/}
      {/*/>*/}
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
  },
  item: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    margin: 10,
    color: '#999999',
  }


});
