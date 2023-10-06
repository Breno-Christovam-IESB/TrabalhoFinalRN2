import {useNavigation} from '@react-navigation/native';
import {HeaderProductProps} from '../common/headerproductsprops';
import { AntDesign } from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';


export function HeaderProducts({title, color}: HeaderProductProps) {
    const navigation = useNavigation();
    return (
        <Container>
            <ContainerHeader>
                <ContentHeader>
                    <ContainerBack onPress={(): void => navigation.goBack()}>
                        <AntDesign name="back" size={24} color="black" />
                    </ContainerBack>
                         <TextHeader>{title}</TextHeader>
                          <ContainerVoid />
                </ContentHeader>             
        </ContainerHeader>  
        </Container>
    );
}

export const Container = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
`;

const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding-left: 12px;
  padding-right: 12px;
`;

const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ContainerBack = styled.TouchableOpacity`
  padding: 8px;
`;

const ContainerVoid = styled.View`
  width: 48px;
`;

const TextHeader = styled.Text`
  font-size: 18px;
  margin-left: 12px;
  color: white;
  background-color: #ededed;
  font-weight: 400;
`;