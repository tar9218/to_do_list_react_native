import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

function ScreenA({navigation, route}) {
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
    // navigation.toggleDrawer();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
      <Text style={styles.text}>{route.params?.Message}</Text>
    </View>
  );
}

export default ScreenA;

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
