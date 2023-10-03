import React from 'react';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Routes from './src/routes';



export default function App () {
  return (
    <Routes/>
  );
};