import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MyButtton from './src/components/MyButton';

const App = () => {
  return (
    <View style ={styles.container}>
      <Text style={styles.text}>Primeira AULA</Text>
      <MyButtton title={'Login'}/>
      <MyButtton title={'Details'}/>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
},
text: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'red',
},
}
);

export default App;