import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import ChakraNextImage from '../chakraNextImage/ChakaraNextImage'

const SidebarIcons = ({item ,index,activeId,onItemClick}) => {
    const imageBoxStyles = {
        w: '3.5rem',
        h: '3.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        background: `${index > 0 && 'rgba(255, 255, 255, 0.04)'}`,
        borderRadius: `${index > 0 && '0.75rem'}`
    }

    const basicBoxStyles = {
        marginTop: `${index === 5 && '9rem'}`,
        marginBottom: `${index === 0 && '1.3rem'}`,
        borderRadius:`${activeId === index ? '0.5rem':'0'}`,
        border: `${activeId === index ? 'solid #9747ff':'none'}`
    }
  return (
    <Box sx={basicBoxStyles}> 
    {item.link ? <Link href={item.link}>
        <a>
       <Flex sx={imageBoxStyles}>
       <ChakraNextImage src={item.image}/>
       </Flex>
        </a>
        </Link>  : 
        <Flex sx={imageBoxStyles} onClick={onItemClick}>
       <ChakraNextImage src={item.image}/>
       </Flex>}  
        
    </Box>
  )
}

export default SidebarIcons