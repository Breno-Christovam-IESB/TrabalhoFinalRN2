import React from "react";
import {SafeAreaView, Text} from 'react-native';
import WebView from "react-native-webview";
import styled from 'styled-components/native';

/*const htmlContent = `
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
`;*/

const ContainerStyles = styled.View`
    flex: 1;
`;

const LabelStyles = styled.Text`
    font-size: 28px;
    color: black;
    font-weight: bold;
`

const Webnavigator = () => {
    return (
        <ContainerStyles>

        <SafeAreaView />          
        <WebView source={{uri: 'https://reactnative.dev/docs/environment-setup?guide=quickstart&package-manager=npm'}}/>

        </ContainerStyles>
        /*<WebView source={{html: htmlContent}}/>*/  
    );
 };

export default Webnavigator;