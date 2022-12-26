import {ChakraProvider, Button} from '@chakra-ui/react'
import { login } from '../../services/login'

interface IButton {
    event: () => {}
}



export const Xbutton = () => {
    return(
        <ChakraProvider>
            <Button onClick={login} colorScheme='blackAlpha' size='sm' width='100%' marginTop='5px'>
                Button
            </Button>
        </ChakraProvider>
    )
}