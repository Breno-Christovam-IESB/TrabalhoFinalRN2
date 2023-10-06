import React from 'react';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Routes from './src/routes';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';


const queryClient = new QueryClient()

export default function App () {
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <StatusBar style="light" backgroundColor="#000" translucent={true} />
    <Routes/>
    </QueryClientProvider>
    </>
  );
};