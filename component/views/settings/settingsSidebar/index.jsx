import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const SettingSidebar = ({item,activeIndex,setActiveIndex}) => {
       
  return (
    <Box top='0' position={'fixed'} w={'20rem'} h={'100vh'} color={'white'} pt={'3.313rem'} px={'2.813rem'} bg={'#0B0B0B'}>
        <HeaderTitle title="Settings" fontWeight={'800'} fontSize={'lg'} lineHeight={'2.785rem'} pb={'1rem'}/>
        <Box borderTop={'1px solid #404040' } py={'1rem'}>
        <HeaderTitle title="Account Settings" fontWeight={'700'} fontSize={'1rem'} color={'brand.grayText'} m={'1rem'} />
        {item.map((items,index) =>(
            <Text key={items.name}
            fontWeight={500}
             color={activeIndex === index + 1 ? 'white' : 'brand.grayText'} 
             background={activeIndex === index + 1 ? 'rgba(19, 19, 19, 0.9)' : 'transparent'} 
             padding= '0.7rem' 
             borderRadius={activeIndex === index + 1 ? '1rem' : 'none'} 
             mb={'1rem'} cursor={'pointer'} 
             onClick={()=>setActiveIndex(index + 1)}>
                {items.name}
                </Text>
        ))}
        </Box>

        <Box mt={'10rem'} borderRadius={'1rem'} p={'1rem'} bg={'rgba(19, 19, 19, 0.9)'}>
        <HeaderTitle title="Appearance" fontWeight={'700'} fontSize={'1.25rem'} color={'brand.grayText'} mb={'1rem'}  pb={'0.5rem'} borderBottom={'1px solid #202020'}/>
        <Flex>
        <Text fontWeight={400}>
        Switch to light mode
        </Text>
        </Flex>
        </Box>
    </Box>
  )
}

export default SettingSidebar