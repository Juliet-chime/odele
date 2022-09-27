import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const NFTDetailsCard = ({title,icon,name}) => {
  return (
   <Box 
   boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
   border={'2px solid #202020'}
   borderRadius={'1.125rem'}
   w={{base:"100%",md:'17rem'}}
   textAlign={'center'}
   p={'2rem'}
   >
     <Text>{title}</Text>
     <Flex justifyContent={'center'} alignItems={'center'} gap={'0.2rem'}>
        {icon && <ChakraNextImage src={icon}/>}
        <Text>{name}</Text>
     </Flex>
   </Box>
  )
}

export default NFTDetailsCard