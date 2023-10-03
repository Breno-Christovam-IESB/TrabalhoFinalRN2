import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';


interface Props extends TouchableOpacityProps {
    title: string;
}

export function Button({
    title,
    ...rest
}: Props) {
    return (
        <Container {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    );
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: #DC1637;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
`;