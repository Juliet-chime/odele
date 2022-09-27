import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const SettingsDrawer = ({item,activeIndex,setActiveIndex,setShowSettings}) => {

    const onhandleClick = (index) => {
        setActiveIndex(index + 1)
        setShowSettings(false)
    }
       
  return (
    <Box color={'white'} pt={'3.313rem'} px={'1rem'}>
        <HeaderTitle title="Settings" fontWeight={'800'} fontSize={'md'} lineHeight={'2.785rem'} pb={'1rem'}/>
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
             onClick={()=>onhandleClick(index)}>
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

export default SettingsDrawer