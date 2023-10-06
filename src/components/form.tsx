import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../../src/components/button';
import { Input } from '../components/input';
import { ISignUpUser } from '../common/user-interface';
import { useNavigation } from '@react-navigation/native';
import {signup} from '../services/createuser-service';



const VALID_EMAIL_EXPRESSION = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

export function Form() {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    function handleUserRegister() {
        if(name.trim() === "") {
            return Alert.alert("Por favor. Preencha o campo nome.")
        }
        if(email.trim() === "") {
            return Alert.alert("Por favor. Preencha o campo email.")
        }
        if(!(VALID_EMAIL_EXPRESSION).test(email.toLowerCase())){
            return Alert.alert("Por favor. Utilize um e-mail válido.")    
        }
        if(password.trim() === "") {
            return Alert.alert("Por favor. Preencha o campo password.")
        }
        if(password.trim().length < 6){
            return Alert.alert("O campo password deve conter pelo menos 6 digitos.")
        }
        if(password.trim() !== passwordConfirm.trim()) {
            return Alert.alert("O campo de confirmação do password deve estar igual ao campo password.")
        }

    }

    const validateFields = (): boolean => {
        if (!name || !email || !password || !passwordConfirm) {
          Alert.alert('Por favor, preencha todos os campos');
          return false;
        }
        return true;
      };

      const signupUser = async () => {
        if (!validateFields()) {
          return;
        }
        setIsLoading(true);
        try {
          const user: ISignUpUser = {
            name,
            email,
            password,
            passwordConfirm,
          };
          await signup(user);
          navigation.navigate('Login');
          Alert.alert("Bem vindo! Seu cadastro foi concluído!")
        } catch (error) {
          Alert.alert("Erro ao tentar carregar os dados! Por favor tente novamente!")
        } finally {
          setIsLoading(false);
        }
        // setIsLoading(false);
      };

    return (
        <Container>
            <Input
            icon="user"
            placeholder="Nome"
            onChangeText={setName}
            value={name}
            />
            <Input
            icon="mail"
            placeholder="e-mail"
            keyboardType="email-address"
            autoCapitalize="none" //'none' evita que a primeira letra seja maiuscula.
            onChangeText={setEmail}
            value={email}
            />
            <Input
            icon="lock"
            placeholder="Senha"
            secureTextEntry //Esconde os dados digitados para a senha.
            onChangeText={setPassword}
            value={password}
            />
            <Input
            icon="lock"
            placeholder="Confirmar senha"
            secureTextEntry
            onChangeText={setPasswordConfirm}
            value={passwordConfirm}
            />

            <Button
            title="Cadastrar"
            onPress={signupUser}
            //onPress={handleUserRegister}
            />
        </Container>
    )
}

export const Container = styled.View`
  width: 100%;
  margin-top: 64px;
  margin-bottom: 16px;
`;