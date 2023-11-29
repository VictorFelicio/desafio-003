import { login } from "./login"

describe('login', () => {

    const mockUserData = {
    email: 'joao@felicio.com',
    password: '123@joao'
    }

    const mockUserDataWrong = {
        email: 'joao@felicio.com',
        password: '123@joao'
        }
    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await login(mockUserData)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login(mockUserDataWrong)
        expect(response).toBeFalsy()
    })
})