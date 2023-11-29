import DButton from '../components/DButton';
import { AppContext } from '../components/AppContext';
import { Card } from '../components/Card';

import { changeLocalStorage } from '../services/storage';
import { login } from '../services/login';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import {
    Box,
    Button,
    Center,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';

export interface IUserDataLogin {
    email: string;
    password: string;
}

const Home = () => {
    const [emailUser, setEmailUser] = useState<string>('');
    const [passwordUser, setPasswordUser] = useState<string>('');

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleClick = () => setShowPassword(!showPassword);

    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const userDataLogin = {
        email: emailUser,
        password: passwordUser,
    };

    const validateUser = async (userData: IUserDataLogin) => {
        const loggedIn = await login(userData);

        if (!loggedIn) {
            return alert('Email ou senha inválido');
        }

        setIsLoggedIn(true);
        changeLocalStorage({ login: true });
        navigate('/conta/1');
    };

    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input
                    placeholder="email"
                    value={emailUser}
                    onChange={(event) => setEmailUser(event.target.value)}
                />
                <InputGroup>
                    <Input
                        placeholder="password"
                        type={showPassword ? 'text' : 'password'}
                        value={passwordUser}
                        onChange={(event) =>
                            setPasswordUser(event.target.value)
                        }
                    />
                    <InputRightElement>
                        <Button onClick={handleClick}>
                            {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Center>
                    <DButton onClick={() => validateUser(userDataLogin)} />
                </Center>
            </Card>
        </Box>
    );
};

export default Home;
