import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';
import { IAppContext } from '../types';

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

    const user = 'nathally';

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    );
};
