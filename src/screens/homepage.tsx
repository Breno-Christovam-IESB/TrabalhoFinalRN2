import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native';
import { ItemProps } from '../common/item-interface';
import ProductsView from '../components/productsview';
import DescriptionSession from '../components/descriptionsession';
import useProducts from '../services/products';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Button } from '../components/button';


export default function HomePage () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={require('../assets/images/welcome_image.png')}
            style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={{ marginTop: 10, color: 'white', fontSize: 30, fontFamily: 'Anton_400Regular'}}>Produtos </Text>
                <Text style={{ marginTop: 20, color: 'white', fontSize: 30, fontFamily: 'Anton_400Regular'}}>em </Text>
                <Text style={styles.text}>Promoção</Text>                
                <ButtonCart onPress={() => navigation.navigate('OrderList')}>
                <AntDesign
                name="shoppingcart"
                size={60}
                color="white"
                />
            </ButtonCart>
            </View>
            <View style={styles.line}/>
            <ProductsView/>
            </View>
            <ProductsView/>
            </View>
            
            
        /*<View>
           <Text style={{ marginTop: 50, fontSize: 25, fontFamily: 'Anton_400Regular'}}>Pagina HomePage</Text> 
        </View>*/
    );
};


const ButtonCart = styled.TouchableOpacity`
`;

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: 'black'
    },
    header:{
        marginBottom: 8
    },
    button:{
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        marginBottom: 8
    },
    image:{
        width: '100%',
        height: '50%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '1%',
        marginHorizontal: '5%'
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 30,
        marginHorizontal: '1%',
        marginVertical: '1%',
        marginTop: '10%',
        color: 'white'
    },
    line:{
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
    }
});