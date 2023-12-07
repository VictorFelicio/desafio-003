import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';
import { IAppContext, IUserDataAccount } from '../types';
import { api } from '../api';

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const storage = getAllLocalStorage();

    useEffect(() => {
        if (storage) {
            const { login } = JSON.parse(storage);
            setIsLoggedIn(login);
        }
    }, [storage]);

    const [userData, setUserData] = useState<IUserDataAccount| null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api;
        setUserData(data);
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    fetchData();
  }, []);    

    return (
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn,userData, setUserData}}>
            {children}
        </AppContext.Provider>
    );
};
