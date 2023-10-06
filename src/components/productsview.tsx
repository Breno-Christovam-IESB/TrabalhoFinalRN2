import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { ItemProps } from "../common/item-interface";
import useProducts from '../services/products';
import styled from "styled-components/native";
import {Platform} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {useIsFocused, useNavigation} from '@react-navigation/native';
import EmptyList from '../components/emptylist';

export default function ProductsView() {
    const navigation = useNavigation();
    const [items, setItems] = useState<ItemProps[]>([]);
    const isFocused = useIsFocused();
    const products = useProducts();

    useEffect(() => {
      if(!isFocused) {
        setItems([]);
          products.remove();
      }
  }, [isFocused]);
  useEffect(() => {
      if (products.data) {
          setItems(products.data);
      }
  }, [products.data]);

    return (
        <Container>
        <Text style={styles.text}>Frutas</Text>
        <FlatList 
        data={items}
        keyExtractor={item => item._id}
        numColumns={2}
        renderItem={({item}) => (
           <ProductContainer
           onPress={(): void => navigation.navigate('DetailsPro', {item})}>
            <ProductsImage source={{
                uri: item.imageUrl,
            }}
            />
            <ProductInfo>
                <ProductPrice>R$:{item.price}</ProductPrice>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductUnit>{item.unit}</ProductUnit>
            </ProductInfo>
            </ProductContainer>    
    )}
    ListEmptyComponent={() => {
        return products.isFetching ? (
            <Text>Aguarde...</Text>
        ) : (
            <EmptyList message="Ops! Algo deu errado, tente novamente." />
        );
    }}
    />
        </Container>
    );
};

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
  padding-top: 10px;
`;

const ProductContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 180px;
  background-color: #ededed;
  padding: 32px 0;
  margin-bottom: 16px;
  border: 5px solid #d9d9d9;
  border-radius: 8px;
`;

const ProductsImage = styled.Image`
  width: 100px;
  height: 95px;
  border-radius: 10px;
`;

const ProductInfo = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductTitle = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 600;
`;

const ProductPrice = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 500;
`;

const ProductUnit = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 500;
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