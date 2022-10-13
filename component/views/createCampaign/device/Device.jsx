import CustomButton from '@/component/button/CustomButton'
import FormCheckInput from '@/component/form/FormCheckInput'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import CreateCampaignHeader from '../CreateCampaignHeader'

const Device = ({next,previous}) => {

    const options =['iOS','Android','Other mobile','Desktop / Pc']

  return (
    <Box>
<CreateCampaignHeader title={'Devices'}/>
<Flex
direction={'column'}
mt='1rem'
border='2px solid #202020'
borderRadius='1.125rem'
p={'1rem 2rem 2rem 2rem'}
boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
>
    <Text mb='1rem' fontWeight={500} color='#727272'>Operating System</Text>
    <FormCheckInput options={options} isCheckedColor='#7F46F9' isChecked={true} />
    </Flex>
    <Flex justifyContent={'center'} gap={'1rem'} mt={'2rem'}>
    <CustomButton text={'Discard'} bg={'#404040'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
    <CustomButton text={'Save as Draft'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
    <CustomButton text={'Previous'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
    <CustomButton text={'Next'} bg={'#7F46F9'} border={'2px solid #FFF'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={next} />
           </Flex>
    </Box>
  )
}

export default Device