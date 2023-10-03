import React from "react";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Form } from '../../src/components/form';
import { Header } from '../../src/components/header';
import styled from 'styled-components/native';

export function SignUp() {
return(
    <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="position" enabled>
                <>
                <Header />
                <Form />
                </>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </Container>
)
}

export const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 24px;
`;