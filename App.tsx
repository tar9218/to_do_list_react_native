import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g John'
        onChangeText={(value) => setName(value)}
        maxLength={20}
        editable={true}
      />

      <Text style={styles.text}>
        Your name is {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default App;
