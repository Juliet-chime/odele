import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const WalletCard = ({img,title,text,onClick}) => {
  return (
    <Box bg='#202020' borderRadius={'1.5rem'} textAlign={'center'} p={{base:'1rem',md:'4.5rem 8rem 1.25rem 8rem'}} cursor={'pointer'} onClick={onClick}>
        <ChakraNextImage src={img}/>
        <HeaderTitle title={title} lineHeight={'1.15rem'} fontFamily={700} fontSize={'1rem'} marginTop={'1rem'}/>
        <Text maxW={'10rem'} margin={'auto'} mt={'1.5rem'}>{text}</Text>
    </Box>
  )
}

export default WalletCard