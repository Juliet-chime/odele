import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ChakraNextImage from '../chakraNextImage/ChakaraNextImage'

const ReportingHubCard = ({item,index}) => {
  return (
    <Box 
    bg={index === 0 ? '#321E5E': index ===1 ?'#0C481D':''} 
    borderRadius={{base:'0',md:index === 0 ? '1.125rem 0rem 0rem 1.125rem': index === 5 ? '0rem 1.125rem 1.125rem 0rem':''}}
    px={{base:'1rem',md:'2.5rem'}} 
    pt={'1rem'} 
    pb={'1.5rem'}>
    <Text fontWeight={400}>{item.title}</Text>
     <Flex gap={'1rem'} mt={'1rem'} alignItems={'center'}>
        {item.total && <Text fontSize={'2rem'} fontWeight={600}>{item.total}</Text>}
        {item.amount && <Text fontSize={'2rem'} fontWeight={600}>{item.currency}{item.amount}</Text>}
        {item.image && <ChakraNextImage src={item.image} alt={item.title}/>}
     </Flex>
    {item.budget &&
     <Flex alignItems={'center'} gap={'0.5rem'}>
        <Text fontSize={'0.75rem'} color={'#A3A3A3'} fontWeight={400}>Budget spent</Text>
        <Text fontSize={'1rem'} color={'#A3A3A3'} fontWeight={600}>{item.currency}{item.budget}</Text>
     </Flex>
    }
    </Box>
  )
}

export default ReportingHubCard