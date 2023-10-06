import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { ItemProps } from '../common/item-interface';
import ProductsView from '../components/productsview';
import DescriptionSession from '../components/descriptionsession';
import useProducts from '../services/products';
import { useNavigation, useIsFocused } from '@react-navigation/native';


export default function HomePage() {
    const navigation = useNavigation();
    const getProducts = useProducts();
    const isFocused = useIsFocused();
    const [product, setProduct] = useState<ItemProps[]>([]);

    useEffect(() => {
        if(!isFocused) {
            setProduct([]);
            getProducts.remove();
        }
    }, [isFocused]);
    useEffect(() => {
        if (getProducts.data) {
            setProduct(getProducts.data);
        }
    }, [getProducts.data]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={require('../assets/images/welcome_image.png')}
            style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Produtos</Text>
                <Text style={styles.text}>em</Text>
                <Text style={styles.text}>Promoção</Text>                
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                <AntDesign
                name="shoppingcart"
                size={30}
                color="white"
                />
            </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <ProductsView/>
            </View>
            <ProductsView/>
            </View>
            
            
        /*<View>
           <Text style={{ marginTop: 50, fontSize: 25, fontFamily: 'Anton_400Regular'}}>Pagina HomePage</Text> 
        </View>*/
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: 'black'
    },
    header:{
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
        fontSize: 26,
        marginHorizontal: '1%',
        marginVertical: '1%',
        color: 'white'
    },
    line:{
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
    }

});