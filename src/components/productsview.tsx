import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { ItemProps } from "../common/item-interface";
import useProducts from '../services/products';
import styled from "styled-components/native";
import {Platform} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {useIsFocused, useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import EmptyList from '../components/emptylist';
import { RootStackParamList } from "../routes";


export default function ProductsView() {
    const navigation = useNavigation();
    const [items, setItems] = useState<ItemProps[]>([]);
    const isFocused = useIsFocused();
    const getProducts = useProducts();

    React.useEffect(() => {
      if(!isFocused) {
        setItems([]);
        getProducts.remove();
      }
  }, [isFocused]);
    React.useEffect(() => {
      if (getProducts.data) {
          setItems(getProducts.data);
      }
  }, [getProducts.data]);

    return (
        <Container>
        <Text style={styles.text}>Frutas</Text>
        <FlatList 
        data={items}
        keyExtractor={item => item._id}
        numColumns={2}
        renderItem={({item}) => (
          <ContainerProduct
            onPress={() => navigation.navigate('DetailsPro', { item })}>
            <ImageProducts
              source={{
                uri: item.imageUrl,
              }}
            />
            <InfoPorducts>
                <TitleProducts>{item.name}</TitleProducts>
                <PriceProducts>R${item.price}</PriceProducts>
                <UnitProducts>1 {item.unit}</UnitProducts>
            </InfoPorducts>
            </ContainerProduct>    
    )}
    />
        </Container>
    );
};

export {ProductsView}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
  padding-top: 10px;
`;

const ContainerProduct = styled.TouchableOpacity`
  background-color: #ededed;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 180px;
  padding: 30px 0;
  margin-bottom: 14px;
  border: 5px solid red;
  border-radius: 10px;
`;

const ImageProducts = styled.Image`
  width: 100px;
  height: 95px;
  border-radius: 10px;
`;

const InfoPorducts = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleProducts = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 400;
`;

const PriceProducts = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 400;
`;

const UnitProducts = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 400;
`;

const FlatList = styled.FlatList<ItemProps>`
  padding-left: ${Platform.OS === 'android' ? 16 : 32}px;
`;

const styles = StyleSheet.create({
text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '5%',
    color: 'white'
},

});