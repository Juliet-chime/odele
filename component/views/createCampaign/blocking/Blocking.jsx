import CustomButton from '@/component/button/CustomButton'
import FormRadio from '@/component/form/FormRadio'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import CreateCampaignHeader from '../CreateCampaignHeader'

const Blocking = ({next,previous}) => {

  const radioOption = ['All', 'Age Range']

  return (
<Box>
    <CreateCampaignHeader title={'Blocking'} />

    <Flex>
<Box border='2px solid #353535' borderRadius='1.5rem'  px={'1rem'} 
           py={'0.5rem'}>
              {/* <FormRadio showText value={radioValue} onChange={setradioValue} radioOption={radioOption} size='md' colorscheme={'purple'}/> */}
            </Box>
    </Flex>
         <Flex justifyContent={'center'} gap={'1rem'} mt={'2rem'}>
         <CustomButton text={'Discard'} bg={'#404040'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
            <CustomButton text={'Save as Draft'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
                <CustomButton text={'Previous'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
                <CustomButton text={'Next'} bg={'#7F46F9'} border={'2px solid #fff'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={next} />
            </Flex>
    </Box>
  )
}

export default Blocking