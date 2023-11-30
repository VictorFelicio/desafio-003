import { Button } from '@chakra-ui/react';
import { IDButton } from '../types';

export const DButton = ({ onClick }: IDButton) => {
    return (
        <Button
            onClick={onClick}
            colorScheme="teal"
            size="sm"
            width="100%"
            marginTop="5px"
        >
            Entrar
        </Button>
    );
};

export default DButton;
