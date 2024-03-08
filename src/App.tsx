import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
       style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
      >
        <Text style={styles.text}>
          Go to Screen B
        </Text>
      </Pressable>
    </View>
  );
}

function ScreenB() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            header: () => null
          }}
        />

        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
        />
      </Stack.Navigator>
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
