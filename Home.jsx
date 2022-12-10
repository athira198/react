import React from 'react'
import { Box } from '@chakra-ui/react'
import {Navbar} from "../components/Navbar/Navbar"
import Cards from "../components/Carts/Cards"

 export const Home = () => {
  return (
    <Box bg="white" height="100vh">
        
        <Navbar/>
        <Cards/>
       
    </Box>

  )
}

