import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../services/storage';
import { AppContext } from './AppContext';

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const logout = () => {
        changeLocalStorage({ login: false });
        setIsLoggedIn(false);
        navigate('/');
    };

    const { userData } = useContext(AppContext);

    const id = userData?.id;

    return (
        <Flex backgroundColor="orange" padding="5px">
            <Box>
                <Center>
                    <Text fontSize="3xl">Dio Bank</Text>
                </Center>
            </Box>
            {isLoggedIn && (
                <>
                    <Spacer />
                    <Box marginRight={5}>
                        <Link to={`conta/${id}`}>
                            <Button>Conta</Button>
                        </Link>
                    </Box>
                    <Box marginRight={5}>
                        <Link to={`/conta/${id}/info`}>
                            <Button>Informações</Button>
                        </Link>
                    </Box>
                    <Box marginRight={5}>
                        <Button onClick={() => logout()}>Sair</Button>
                    </Box>
                </>
            )}
        </Flex>
    );
};
