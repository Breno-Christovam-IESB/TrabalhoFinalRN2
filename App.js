//import React from 'react';
//import {View, Text, StyleSheet, TouchableOpacity, AppRegistry} from 'react-native';
//import MyButtton from './src/components/MyButton';
//import App from './src/screens/WebNavigator';
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

//const App = () => {
  //return (
   // <View style ={styles.container}>
     // <Text style={styles.text}>Primeira AUA</Text>
     // <MyButtton title={'Login'}/>
     // <MyButtton title={'Details'}/>
    // </View>
  //);
//};

// const styles = StyleSheet.create({
//container: {
//  flex: 1,
//  justifyContent: 'center',
//  alignItems: 'center',
//  backgroundColor: 'black',
// },
// text: {
//  fontSize: 18,
//  fontWeight: 'bold',
//  color: 'red',
//},
//}
//);

// export default App;

import React from "react";
//import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import WebView from "react-native-webview";
import styled from 'styled-components/native';

const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML Content</title>
    <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f3f4f6;
      padding: 20px;
    }
    </style>
    </head>
    <body>
    <h1>Welcome to my HTML</h1>
    <p>This is a paragraph inside the WebView.</p>
    </body>
    </html>
`;

const ContainerStyles = styled.View`
    flex: 1;
`;

const LabelStyles = styled.Text`
    font-size: 28px;
    color: black;
    font-weight: bold;
`

const App = () => {
    return (
        //<View style={styles.container}>
        <ContainerStyles>

          <SafeAreaView />
        {/* <LabelStyles>
            Primeiro Componente Estilizado com StyledComponent
            </LabelStyles> */}
            
        <WebView source={{uri: 'https://reactnative.dev/docs/environment-setup?guide=quickstart&package-manager=npm'}}/>

        </ContainerStyles>


        /*<WebView source={{html: htmlContent}}/>*/  
        // </View>
    );
 };

// const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        //justifyContent: 'center',
//        //alignItems: 'center',
//    },
//     text: {
//      fontSize: 18,
//      fontWeight: 'bold',
//      color: 'red',
// },
// })

export default App;