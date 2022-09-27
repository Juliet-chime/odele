import FormInput from '@/component/form/FormInput'
import FormTextarea from '@/component/form/FormTextArea'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, Text } from '@chakra-ui/react'
import profilephoto from "../../../../public/images/pictures/profilephoto.svg"
import bannerphoto from "../../../../public/images/pictures/bannerphoto.svg"
import React from 'react'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import { BsInfoCircle } from 'react-icons/bs'
import CustomButton from '@/component/button/CustomButton'

const SettingProfile = () => {
  return (
    <Box>
      <HeaderTitle title="Profile details" fontWeight={'700'} fontSize={{ base: 'md', md: 'lg' }} />
      <Flex justifyContent={'flex-end'} my={'1rem'}>
        <CustomButton text={'Preview'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "10rem", md: '11rem' }} fontSize={'1rem'} fontWeight={'500'} />
      </Flex>

      <Flex direction={{ base: 'column', md: 'row' }} justifyContent={'space-between'}>
        <Box>
          <form>
            <FormInput
              label={'Username'}
              placeholder={' Daniel Arttiocon'}
              labelProps={{ color: '#636363', fontSize: '1rem' }}
              p={'2rem'}
              border='none'
              bg={'#0B0B0B'}
            />
            <FormInput
              label={'Email Address'}
              placeholder={'Usermail@gmail.com'}
              labelProps={{ color: '#636363', fontSize: '1rem' }}
              p={'2rem'}
              border='none'
              bg={'#0B0B0B'}
            />
            <FormTextarea
              label={'Bio'}
              placeholder={'Input your bio here'}
              labelProps={{ color: '#636363', fontSize: '1rem' }}
              p={'2rem'}
              border='none'
              bg={'#0B0B0B'}
            />

            <FormInput
              label={'Website Link'}
              placeholder={'yoursite.io'}
              labelProps={{ color: '#636363', fontSize: '1rem' }}
              p={'2rem'}
              border='none'
              bg={'#0B0B0B'}
            />
            <FormInput
              label={'Wallet Address'}
              placeholder={'0xd6b9df332600954930239291019400'}
              labelProps={{ color: '#636363', fontSize: '1rem' }}
              p={'2rem'}
              border='none'
              bg={'#0B0B0B'}
            />
            <CustomButton mt={'2rem'} text={'Save Changes'} bg={'#7F46F9'} border={'2px solid #FFFFFF'} width={{ base: "10rem", md: '11rem' }} fontSize={'1rem'} fontWeight={'500'} />
          </form>
        </Box>
        <Box
          pt={'1rem'}
          px={'1rem'}
          h={'32rem'}
          border={'2px solid #202020'}
          boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
          borderRadius={'1.125rem'}>
          <Box textAlign={'center'}>
            <Flex color={'#A3A3A3'} mb={'0.5rem'} alignItems={'center'} justifyContent={'center'} gap={'1rem'}>
              <Text>Profile Photo</Text>
              <Text><BsInfoCircle /></Text>
            </Flex>
            <ChakraNextImage src={profilephoto} />
          </Box>
          <Box mt={'2rem'}>
            <Flex mb={'0.5rem'} color={'#A3A3A3'} alignItems={'center'} gap={'1rem'}>
              <Text>Banner Photo</Text>
              <Text><BsInfoCircle /></Text>
            </Flex>
            <ChakraNextImage src={bannerphoto} />
          </Box>

        </Box>
      </Flex>
    </Box>
  )
}

export default SettingProfile