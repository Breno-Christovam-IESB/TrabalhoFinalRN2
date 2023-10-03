import React from 'react';
import styled from 'styled-components/native';

export function Header() {
  return (
    <Container>
      <Title>
        Crie sua{'\n'}conta
      </Title>

      <Subtitle>
        Faça seu cadastro de{'\n'}
        forma rápida e simples.
      </Subtitle>
    </Container>
  )
}

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #47474D;
  margin-top: 60px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: #7A7A80;
  line-height: 25px;  
`;