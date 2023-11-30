import { IUserDataAccount } from './types';

const conta: IUserDataAccount = {
    email: 'joao@felicio.com',
    password: '123@joao',
    name: 'João Felicio',
    balance: 2000.0,
    id: '1',
};

export const api = new Promise<IUserDataAccount>((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
});
