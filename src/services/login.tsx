import { api } from '../api';
import { IUserDataLogin } from '../types';

export const login = async (userData: IUserDataLogin): Promise<boolean> => {
    const dataApi = await api;

    const { email, password } = userData;

    if (email !== dataApi.email || password !== dataApi.password) {
        return false;
    }

    return true;
};
