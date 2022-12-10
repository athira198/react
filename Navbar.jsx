import React from 'react'
import { Box,Heading,Flex} from '@chakra-ui/react'



 export const Navbar=()=>{
    return (
       <Flex bgGradient="linear(to-l, #7928CA, #FF0080)" h="100px" align="center" justify="space-between" p="4">
        <Heading color="white">cart</Heading>
        <Heading>👜</Heading>
       </Flex>
    )
}