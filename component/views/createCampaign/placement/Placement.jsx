import CustomButton from '@/component/button/CustomButton'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import FormRadio from '@/component/form/FormRadio'
import CreateCampaignHeader from '../CreateCampaignHeader'
import placement from '../../../../public/images/pictures/placement.png'

const Placement = ({ previous }) => {

  const radioOption = ['In-feed #01', 'In-feed #02', 'Side bar ads #01', 'Header ads #01', 'Side bar ads #01']

  const [isChecked, setIsChecked] = useState(false) 

  return (
    <Box>
      <CreateCampaignHeader title={'Placement'} />
      <Box
        border='2px solid #202020'
        mt='1rem'
        boxShadow='0px 10px 24px rgba(0, 0, 0, 0.18)'
        borderRadius='1.125rem'
        p='2.25rem'
      >
        <Text fontWeight={400} fontSize='1.125rem'>
          Select placement type to be displayed
        </Text>
        <Text fontWeight={400} color='#727272' mt='0.5rem'>
          In-feed ads, content ads on website as well as sponsored content
        </Text>

        <FormRadio
          radioOption={radioOption}
          showImg={placement}
          showText label={isChecked ? 'Blocked' : 'Block'}
          isChecked={isChecked}
          size={'sm'}
          gap='1.5rem'
          radioStyle={{
            border: '2px solid #202020',
            borderRadius: '1.5rem',
            padding: '0.3rem 1.2rem',
          }}
          radioWrapperStyle={{
            width: '27rem',
            border: '2px solid #202020',
            borderRadius: '1.125rem',
            p: '1.625rem 1.25rem 0 1.25rem',
          }}
          flexWrapper={{
            justifyContent: 'space-between'
          }}
        />
        <Box>
        </Box>


      </Box>
      <Flex justifyContent={'center'} gap={'1rem'} mt={'2rem'}>
        <CustomButton text={'Discard'} bg={'#404040'} width={{ base: "100%", md: '10rem' }} fontSize={{ base: '0.5rem', md: '1rem' }} fontWeight={'500'} onClick={previous} />
        <CustomButton text={'Save as Draft'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{ base: '0.5rem', md: '1rem' }} fontWeight={'500'} onClick={previous} />
        <CustomButton text={'Previous'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{ base: '0.5rem', md: '1rem' }} fontWeight={'500'} onClick={previous} />
      </Flex>
    </Box>
  )
}

export default Placement