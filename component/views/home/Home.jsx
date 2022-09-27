import React from 'react'
import { Box } from '@chakra-ui/react'
import odeleNFT from "../../../public/images/pictures/odeleNft.svg"
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import WelcomeToOdele from './WelcomeToOdele'

const HomePage = () => {
  return (
    <Box h={'100vh'} display={'flex'}>
      <Box flex={'1'} display={{ base: "none", md: "block" }}>
        <Box position={'relative'} zIndex={99999} right={'-10rem'} >
          <ChakraNextImage src={odeleNFT} height={750} />
        </Box>
      </Box>

      <WelcomeToOdele />
    </Box>
  )
}

export default HomePage