import { MouseEventHandler } from "react";

interface IUserDataAccount {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

interface ICardInfo {
    mainContent: string,
    content: string
}

interface IDButton {
    onClick: MouseEventHandler
}

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

interface IUserDataLogin {
    email: string;
    password: string;
}

interface IDIoBank {
    login: boolean;
}

export type {IUserDataAccount, IAppContext,ICardInfo,IDButton,UserData,IUserDataLogin,IDIoBank }