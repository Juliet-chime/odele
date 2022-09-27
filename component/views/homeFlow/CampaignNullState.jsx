import CustomButton from '@/component/button/CustomButton'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import chart from '../../../public/images/icons/Chart.svg'

const CampaignNullState = ({text,button,btnText,icon}) => {
  return (
 <Box textAlign={'center'} py={{base:'5rem',md:'7rem'}}>
        <ChakraNextImage src={chart}/>
        <Text color={'#A3A3A3'} mt={'1rem'} fontWeight={400}>{text}</Text>
{button && <CustomButton
            text={btnText}
            fontSize={{ base: '0.8rem', md: '1rem' }}
            leftIcon={icon}
            width={{ base: '10rem', md: '13rem' }}
            m={'auto'}
            mt={'4rem'}
            border={'2px solid #7F46F9'} />}
 </Box>
  )
}

export default CampaignNullState