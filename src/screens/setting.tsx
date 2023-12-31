import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: #ededed;
`;

const Setting = () => {
    return (
    <Container>
        <SafeAreaView />
    </Container>
    );
};

export default Setting;