import React, {useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

const App = () => {
  const [items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'}
  ]);
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = ()=> {
    setRefreshing(true);
    setItems([...items, {key:9, item: 'Item 9'}]);
    setRefreshing(false);
  }

  return (
    <View style={styles.body}>
        <ScrollView
          refreshControl={
           <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#4ae1fa']}
           />
          }
        >
          <View>
            {
              items.map((object) => {
                return(
                  <View style={styles.item} key={object.key}>
                    <Text style={styles.text}>{object.item}</Text>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin:10
  }
});

export default App;
