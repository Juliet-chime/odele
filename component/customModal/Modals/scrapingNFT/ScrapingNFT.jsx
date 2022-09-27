import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import scraping from "../../../../public/images/pictures/scraping.png"

const ScrapingNFT = () => {
  return (
    <Box textAlign={'center'}>
      <ChakraNextImage src={scraping} />
      <HeaderTitle title="Scraping and gathering all: ;
NFT information within wallet" lineHeight={"3.625rem"} fontWeight={'800'} fontSize={'md'} />
      <Text mt={'1.438rem'} color={'brand.grayText'}>gather 0x0494e0.... 24%</Text>
    </Box>
  )
}

export default ScrapingNFT