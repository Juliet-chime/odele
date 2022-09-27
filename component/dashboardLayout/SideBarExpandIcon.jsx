import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import ChakraNextImage from '../chakraNextImage/ChakaraNextImage'

const SidebarExpandIcons = ({item ,index,activeId,onItemClick}) => {

    const basicBoxStyles = {
        background: `${activeId === index ? 'none' :'rgba(255, 255, 255, 0.04)'}`,
        width: '100%',
        padding:'0.3rem 1rem',
        marginBottom:`${index === 0 && '1rem'}`,
        border: `${activeId === index ? 'solid #9747ff':'none'}`,
        borderRadius:  '0.75rem',
    }

  return (
    <Box 
    sx={basicBoxStyles} > 
    {item.link ?  <Link href={item.link}>
        <a>
       <Flex alignItems={'center'} gap={'0.8rem'}>
       <ChakraNextImage src={item.image} display='flex' alignItems='center'/>
       <Text color={'#727272'} fontWeight={400}>{item.title}</Text>
       </Flex>
        </a>
        </Link> : 
      <Flex onClick={onItemClick} alignItems={'center'} gap={'0.8rem'}>
       <ChakraNextImage src={item.image} display='flex' alignItems='center'/>
       <Text color={'#727272'} fontWeight={400}>{item.title}</Text>
       </Flex>}  
       
    </Box>
  )
}

export default SidebarExpandIcons