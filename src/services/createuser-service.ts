//import {useMutation, UseMutationResults} from 'react-query';
import api from '../services/api';
import {IUserResponse, ILoginUser, ISignUpUser} from '../common/user-interface'


export const signup = async(user: ISignUpUser): Promise<Number> => {
    const response = await api.post('/create-user', user);
    return response.status;
};