import api from "./api";
import {IUserResponse, ILoginUser} from '../common/user-interface'

export const fetchUsers = async(): Promise<IUserResponse> => {
    const response = await api.get<IUserResponse>('/read-user');
    return response.data;
};

export const login = async(user: ILoginUser): Promise<Number> => {
    const response = await api.post('/login-user', user);
    return response.status;
}