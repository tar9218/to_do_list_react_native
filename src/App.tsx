import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./screens/Home.tsx";
import Login from "./screens/Login.tsx";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from 'react-redux';
import { Store } from './redux/store';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
// const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();



function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#0080ff',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

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
  }
});

export default App;
