import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import CardInfo from '../components/CardInfo';
import { AppContext } from '../components/AppContext';

const Conta = () => {
    const { userData } = useContext(AppContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoggedIn } = useContext(AppContext);

    !isLoggedIn && navigate('/');

    const actualData = new Date();

    if (userData && id !== userData.id) {
        navigate('/');
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {userData === undefined || userData === null ? (
                    <Center>
                        <Spinner size="xl" color="white" />
                    </Center>
                ) : (
                    <>
                        <CardInfo
                            mainContent={`Bem vindo ${userData?.name}`}
                            content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
                        />
                        <CardInfo
                            mainContent="Saldo"
                            content={`R$ ${userData.balance}`}
                        />
                    </>
                )}
            </SimpleGrid>
        </Center>
    );
};

export default Conta;
