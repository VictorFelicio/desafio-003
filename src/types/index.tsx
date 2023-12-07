import { MouseEventHandler } from 'react';

interface IUserDataAccount {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

interface IAppContext {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    userData: IUserDataAccount | null;
    setUserData: React.Dispatch<React.SetStateAction<IUserDataAccount | null>>;
}

interface ICardInfo {
    mainContent?: string;
    content?: string | React.ReactNode
}

interface IDButton {
    onClick: MouseEventHandler;
}

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

interface IUserDataLogin {
    email: string;
    password: string;
}

interface IDIoBank {
    login: boolean;
}

export type {
    IUserDataAccount,
    IAppContext,
    ICardInfo,
    IDButton,
    UserData,
    IUserDataLogin,
    IDIoBank,
};
