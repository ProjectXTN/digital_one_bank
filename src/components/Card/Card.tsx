import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react"
import { Xbutton } from "../Button/Button"
import { Header } from "../Header/Header"


interface ICard {
    id: number
    paragraph: string
    details: string
}


export const Card = () => {
    return (
        <>
            <ChakraProvider>
                <Box display='flex' justifyContent="space-around" backgroundColor='rgba(1, 1, 1, 1)' textColor='white'>
                    <Header />
                </Box>
                <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                    <Center>
                        <Box backgroundColor='#FFF' borderRadius='25px' padding='15px' width='400px'>
                            <Center>
                                <h1>
                                    Faça Login
                                </h1>
                            </Center>
                            <Input placeholder='email' />
                            <Input placeholder='password' />
                            <Center>
                                <Xbutton />
                            </Center>
                        </Box>
                    </Center>
                </Box>
            </ChakraProvider>
        </>
    )
}