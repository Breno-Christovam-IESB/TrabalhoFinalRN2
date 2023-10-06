import EmptyListProps from '../common/emptylistprops';
import styled from 'styled-components/native';

function EmptyList({message}: EmptyListProps) {
    return (
        <Container>
            <Msg>{message}</Msg>
        </Container>
    )
};

export default EmptyList;

const Container = styled.View`
    padding: 16px;
    justify-content: center;
    align-items: center;
`;

const Msg = styled.View`
    color: white;
    font-size: 16px;
`;

