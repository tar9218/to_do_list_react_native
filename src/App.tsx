import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from "./ScreenA.tsx";
import ScreenB from "./ScreenB.tsx";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();



function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name === 'ScreenA'){
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';
            }else if(route.name === 'ScreenB'){
              iconName = 'btc';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';
            }
            return(
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}

        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{backgroundColor: '#694fad'}}
      >
        <Tab.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            // tabBarBadge: 3
          }}
        />

        <Tab.Screen
          name="ScreenB"
          component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
