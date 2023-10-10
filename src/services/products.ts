import api from '../services/api';
import { ItemProps } from '../common/item-interface';
import { UseBaseQueryResult, useQuery } from 'react-query';

export const getProducts = async (): Promise<ItemProps> => {
    const {data} = await api.get('/read-products');
    return data;
};

const useProducts = (): UseBaseQueryResult<ItemProps[]> => {
    return useQuery(['products'], () => getProducts());
};

export default useProducts;