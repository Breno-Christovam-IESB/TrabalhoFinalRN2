import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import { ItemProps } from "../../common/item-interface";
import {carQuantity, carItems} from '../../common/atomstore';
import { useAtom, atom } from 'jotai';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from "../../components/button";
import styled from 'styled-components/native';
import { HeaderProducts } from "../headerproducts";


export default function DetailsPro(props: any) {
    const productDetail = props.route.params.item as ItemProps;

    const [quantity, setQuantity] = useAtom(carQuantity);
    const [, setItems] = useAtom(carItems);
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    React.useEffect(() => {
        if (!isFocused) {
            setQuantity(0);
        }
    }, [isFocused]);

const addItem = (): void => {
    setQuantity(quantity + 1)
};

const delItem = (): void => {
    setQuantity(quantity - 1)
};

const addCartItem = (): void => {
    navigation.goBack();
    setItems(prevItems => {
        const existItem = prevItems.findIndex(
            item => item.name === productDetail.name,
        );
  if (existItem !== -1) {
    const newCart = [...prevItems];
    newCart[existItem].quantity! += quantity!;
    return newCart;
  } else {
    const newProduct = {...productDetail, quantity: quantity};
    return [...prevItems, newProduct];
  }      
  });
}
return(
    <ScrollView>
        <HeaderProducts title={`Detalhes: ${productDetail.name}`} color ="white" />
        <Container>
            <ImageBackground source={{uri: productDetail.imageUrl}} />
            <Content>
                <ProductName>{productDetail.name}</ProductName>
                <ProductPrice>R$ {productDetail.price}</ProductPrice>
                <ProductUnit>{productDetail.unit}</ProductUnit>
                <ProductDescript>{productDetail.description}</ProductDescript>
                <AddCart>
                    <TextAddCart>Quantidade:</TextAddCart>
                    <QuantityControl>
                        <DelItem onPress={(): void => delItem()}>
                        <AntDesign name="minussquare" size={24} color="black" />
                        </DelItem>
                        <Text style={{
                            color: 'white',
                            fontSize:22,
                            borderRightColor: '#ededed',
                            borderRightWidth: 1,
                            borderLeftColor: '#ededed',
                            borderLeftWidth: 1,
                            height: 45,
                            paddingHorizontal: 20,
                            paddingBottom: 7,
                            marginBottom: 20,

                        }}>
                            {quantity || 0}
                        </Text>
                        <AddItem onPress={(): void => addItem()}>
                        <AntDesign name="plussquare" size={24} color="black" />
                        </AddItem>
                    </QuantityControl>
                </AddCart>
                <Button
                    title="Add"
                    onPress={(): void => addCartItem()}   
                    />
          </Content>
        </Container>
    </ScrollView>
)
};

export {DetailsPro}

const Container = styled.View`
`;

const Content = styled.View`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 25px 15px;
  border-radius: 15px;
  background-color: #ededed;
  height: 100%;
`;

const ProductPrice = styled.Text`
  color: #28b446;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

const ProductName = styled.Text`
  color: white;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
`;

const ProductUnit = styled.Text`
  color: #ededed;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const ProductDescript = styled.Text`
  color: black;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 18px;
`;

const AddCart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const TextAddCart = styled.Text`
  color: #ededed;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  padding-left: 14px;
`;

const QuantityControl = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding-right: 14px;
`;

const DelItem = styled.TouchableOpacity``;

const AddItem = styled.TouchableOpacity``;
