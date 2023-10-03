import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInputProps, TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({
    icon,
    value,
    ...rest }:
    InputProps) {
        const [isFocused, setIsFocused] = useState(false);
        const [isFilled, setIsFilled] = useState(false);

        function handleInputFocus() {
            setIsFocused(true);
        }
        function handleInputBlur() {
            setIsFocused(false);
            setIsFilled(!!value)
        }
        return (
            <Container >
                <IconContainer isFocused={isFocused}>
                    <Feather 
                    name={icon}
                    size={24}
                    color={(isFocused || isFilled) ? '#DC1637' : '#AEAEB3'}
                    />
                </IconContainer>

                <InputText 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused}
                value={value}
                {...rest}
                />
            </Container>
        );
    }

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: #FFFFFF;

  
  ${({ isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: #DC1637;   
  `};
`;

export const InputText = styled(TextInput) <Props>`
  flex: 1;
  background-color: #FFFFFF;
  color: #7A7A80;
  padding: 0 23px;

  ${({ isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: #DC1637;    
  `};
`;