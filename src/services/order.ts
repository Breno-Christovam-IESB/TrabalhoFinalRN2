import api from "./api";
import { useMutation, UseMutationResult } from 'react-query';

interface Custom {
    _id: string;
    name: string;
}

interface OrderProps {
    custom: Custom;
    items: any;
}

const order = async ({custom, items}: OrderProps) => {
    const payload = {custom, items};
    const {data} = await api.post('/create-order', payload);
    return data.data;
};

const useOrder = ({
    custom,
    items,
}: OrderProps): UseMutationResult<OrderProps> => {
    return useMutation(['Order'], () => order({custom, items}));
};

export default useOrder;
