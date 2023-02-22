import CustomButton from '@/component/button/CustomButton'
import FormRadio from '@/component/form/FormRadio'
import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import CreateCampaignHeader from '../CreateCampaignHeader'

const Blocking = ({next,previous}) => {

  const radioOption = ['Facebook','Discord','YouTube','Twitter']

  const [isChecked, setIsChecked] = useState(false)

  return (
    <Box>
    <CreateCampaignHeader title={'Blocking'} />

    <Flex
    border='2px solid #202020'
    boxShadow='0px 10px 24px rgba(0, 0, 0, 0.18)'
    borderRadius='1.125rem'
    p='2.25rem'
    mt="1rem"
    >
       <FormRadio 
       radioOption={radioOption}
       showText label={isChecked ? 'Blocked': 'Block'} 
       isChecked={isChecked} 
       onChange={()=>setIsChecked(!isChecked)}
       size={'sm'}
       radioStyle={{
        border: '2px solid #202020',
        borderRadius: '1.5rem',
        padding:'0.3rem 1.2rem',
        marginRight:'1rem'
        }}
        flexWrapper={{
          gap:'0.5rem',
        }}
        />
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