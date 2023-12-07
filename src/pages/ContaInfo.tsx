import { useContext } from 'react';
import CardInfo from '../components/CardInfo';
import { AppContext } from '../components/AppContext';
import { SimpleGrid, Spinner, Box } from '@chakra-ui/react';

const ContaInfo = () => {
    const { userData } = useContext(AppContext);

    return (
        <SimpleGrid columns={1} spacing={4} justifyItems={'center'} marginTop={15}>
            
                <Box minWidth={350}>
                    <CardInfo
                        mainContent={'Email:'}
                        content={userData?.email ?? <Spinner />}
                    />
                </Box>
                <Box minWidth={350}>
                    <CardInfo
                        mainContent={'Nome:'}
                        content={userData?.name ?? <Spinner />}
                    />
                </Box>
           
        </SimpleGrid>
    );
};

export default ContaInfo;
