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

const Title = styled.Text<TextProps>`
    font-size: 32px;
    color: ${props => props.color};
    text-align: center;
    margin: 24px 24px 0 24px;
`;

const Subtitle = styled.Text`
    font-size: 22px;
    color: white;
    margin: 8px 0 32px 0;
    text-align: center;
    opacity: 0.8;
`;

const Home = () => {
    const { navigate } = useNavigation();
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <SafeAreaView />
            <ImageWrapper>
                <LogoImage source={WelcomeImage} resizeMode="contain" />
            </ImageWrapper>
            <ContentWrapper>
                <Row>
                <Title color="#ffd700">Compras</Title>
                <Title color="#00ff7f">Online</Title>
                </Row>
                <Subtitle>A melhor solução para compras online.</Subtitle>
                <MyButton
                    activeOpacity={0.3}
                    buttonColor="black"
                    labelColor="orange"
                    title="Começar a comprar!"
                    onPress={() => navigate('Login')}
                        //Alert.alert('Ola', 'Este é o componente de Botão')                       
                      />
            </ContentWrapper>
        </ScrollView>
    );
};

export default Home;