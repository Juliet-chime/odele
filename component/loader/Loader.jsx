import { Box,Flex,keyframes } from '@chakra-ui/react'
import React from 'react'
import logo from "../../public/images/icons/odeleLogowhite.svg"
import ChakraNextImage from '../chakraNextImage/ChakaraNextImage'

const spin = keyframes`
0% {
      opacity: 0.3;
    }
    50% {
    transform: scale(1.5);
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
`;

const Loader = () => {

const spinAnimation = `${spin} infinite 2s linear`;

  return (
    <Flex height={'100vh'} width={'full'} position={'relative'} alignItems={'center'} justifyContent={'center'}>
        <ChakraNextImage src={logo} animation={spinAnimation}/>
    </Flex>
  )
}

export default Loader