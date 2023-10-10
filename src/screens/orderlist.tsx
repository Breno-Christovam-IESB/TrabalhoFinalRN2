import {useNavigation} from '@react-navigation/native';
import React from "react";
import {ScrollView, Alert, SafeAreaView} from "react-native";
import styled from "styled-components/native";
import WelcomeImage from '../assets/images/welcome_image.png';
import MyButton from '../components/MyButton';


type TextProps = {
    color: string;
};

/* const Container = styled.View`
flex: 1;
`; */

const ImageWrapper = styled.View`
    background-color: black;
    flex: 2;
    padding: 16px;
`;

const LogoImage = styled.Image`
    width: 100%;
    height: 100%;
`

const ContentWrapper = styled.View`
    background-color: #b22222;
    flex: 0.3;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    padding: 16px;
`;

const Row = styled.View`
flex-direction: row;
justify-content: center;
`;

const TitleCompras = styled.Text<TextProps>`
    font-size: 32px;
    text-align: center;
    margin: 24px 24px 0 24px;
    color: #ffd700;
`;

const TitleOnline = styled.Text<TextProps>`
    font-size: 32px;
    text-align: center;
    margin: 24px 24px 0 24px;
    color: #7fff00;
`;

const Subtitle = styled.Text`
    font-size: 22px;
    color: white;
    margin: 8px 0 32px 0;
    text-align: center;
    opacity: 0.8;
`;

const OrderList = () => {
    const { navigate } = useNavigation();
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <SafeAreaView />
            <ImageWrapper>
                <LogoImage source={WelcomeImage} resizeMode="contain" />
            </ImageWrapper>
            <ContentWrapper>
                <Row>
                <TitleCompras>Compras</TitleCompras>
                <TitleOnline>Online</TitleOnline>
                </Row>
                <Subtitle>Pagina em manutenção tente mais tarde =/.</Subtitle>
                <MyButton
                    activeOpacity={0.3}
                    buttonColor="black"
                    labelColor="orange"
                    title="Voltar para a pagina de compras"
                    onPress={() => navigate('HomePage')}
                        //Alert.alert('Ola', 'Este é o componente de Botão')                       
                      />
            </ContentWrapper>
        </ScrollView>
    );
};

export {OrderList};