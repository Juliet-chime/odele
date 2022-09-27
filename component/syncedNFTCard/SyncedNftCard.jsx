import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ChakraNextImage from '../chakraNextImage/ChakaraNextImage'
import HeaderTitle from '../Heading/Heading'
import ethereum from "../../public/images/pictures/ethereum-logo.png"
import CustomButton from '../button/CustomButton'

const SyncedNftCard = ({item,border,text,button,justifyContent}) => {

    const typeStyle = {
         fontWeight: '500',
         fontSize: '0.75rem',
         lineHeight: '1.125rem',
         textAlign:'center',
         //w:'7rem',
         textTransform:'capitalize',
         borderRadius:'1.5rem',
         marginTop:'1.625rem',
         padding:'0.5rem 0.8rem',
         color:`${item.type === 'single' ? '#3166EF':'#7F46F9'}`,
         background:`${item.type === 'single' ? 'rgba(49, 102, 239, 0.1)' :'rgba(127, 70, 249, 0.1)' }`
    }

  return (
 <Box w={'18.75rem'} border={'2px solid #202020'} boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'} borderRadius={'1.125rem'}>
    <Box>
        <ChakraNextImage src={item.image}/>
    </Box>
    <Box p={'1rem'}>
    <HeaderTitle mb={'0.5rem'} title={item.title} lineHeight={"1.375rem"} fontWeight={'700'} fontSize={'sm'} />
    <Text mb={'0.5rem'} fontWeight={500} fontSize={'0.875rem'} color={'white'}>
        {item.name}
    </Text>
<Flex gap={'0.4rem'}>
<ChakraNextImage src={ethereum}/>
<Text fontWeight={300} fontSize={'0.875rem'}>
        {item.rate}
    </Text>
</Flex>
<Flex justifyContent={justifyContent}>
<Text sx={typeStyle}>{item.type}</Text>
</Flex>
{button && <CustomButton mt={'1.6875rem'} text={text} bg={'#131313'} border={border} width={{ base: "10rem", md: '15rem' }} fontSize={'1rem'} fontWeight={'500'} />}
    </Box>
 </Box>
  )
}

export default SyncedNftCard