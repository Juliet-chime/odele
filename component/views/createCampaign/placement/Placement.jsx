import CustomButton from '@/component/button/CustomButton'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import CreateCampaignHeader from '../CreateCampaignHeader'

const Placement = ({previous}) => {
  return (
<Box>
    <CreateCampaignHeader title={'Placement'} />
         <Flex justifyContent={'center'} gap={'1rem'} mt={'2rem'}>
         <CustomButton text={'Discard'} bg={'#404040'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
         <CustomButton text={'Save as Draft'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
         <CustomButton text={'Previous'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
            </Flex>
    </Box>
  )
}

export default Placement