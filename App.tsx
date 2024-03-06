import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  Modal,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      // Alert.alert('Warning', 'The name must be longer than 3 characters', [
      //   {text: 'Do not show again', onPress:() => console.warn('Do not show again'), style: 'destructive'},
      //   {text: 'Cancel', onPress:() => console.warn('Cancel Pressed!'), style: 'destructive'},
      //   {text: 'OK', onPress:() => console.warn('OK Pressed'), style: 'destructive'},
      // ], {cancelable: true, onDismiss:() => console.warn('Alert dismissed!')});
      setShowModal(true);
    }
  };

  return (
    <View style={styles.body}>
      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType='fade'
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer that 3 characters
              </Text>
            </View>
            <Pressable
              onPress={() => setShowModal(false)}
              style={styles.warning_butoom}
              android_ripple={{color: '#fff'}}
            >
              <Text style={styles.text}>
                Ok
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Please write</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g John"
        onChangeText={value => setName(value)}
        maxLength={20}
        editable={true}
      />
      {/*<Button*/}
      {/*  title={submitted ? 'Clear' : 'Submit'}*/}
      {/*  onPress={onPressHandler}*/}
      {/*  color='#00f'*/}
      {/*/>*/}

      {/*<TouchableOpacity*/}
      {/*  style={styles.button}*/}
      {/*  onPress={onPressHandler}*/}
      {/*  activeOpacity={0.2}*/}
      {/*>*/}
      {/*  <Text style={styles.text}>*/}
      {/*    {submitted ? 'Clear' : 'Submit'}*/}
      {/*  </Text>*/}
      {/*</TouchableOpacity>*/}

      {/*<TouchableHighlight*/}
      {/*  style={styles.button}*/}
      {/*  onPress={onPressHandler}*/}
      {/*  activeOpacity={0.2}*/}
      {/*  underlayColor='#dddddd'*/}
      {/*>*/}
      {/*  <Text style={styles.text}>*/}
      {/*    {submitted ? 'Clear' : 'Submit'}*/}
      {/*  </Text>*/}
      {/*</TouchableHighlight>*/}

      {/*<TouchableWithoutFeedback*/}
      {/*  style={styles.button}*/}
      {/*  onPress={onPressHandler}*/}
      {/*>*/}
      {/*  <Text style={styles.text}>*/}
      {/*    {submitted ? 'Clear' : 'Submit'}*/}
      {/*  </Text>*/}
      {/*</TouchableWithoutFeedback>*/}

      <Pressable
        onPress={onPressHandler}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button,
        ]}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>

      {submitted ? <Text style={styles.text}>Your name is {name}</Text> : null}
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
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000'
  },
  warning_modal: {
    width: 300,
    height: 300,
    // backgroundColor: '#999',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_butoom: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
});

export default App;
