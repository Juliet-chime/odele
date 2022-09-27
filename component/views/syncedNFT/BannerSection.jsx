import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import FormInput from '@/component/form/FormInput'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPen } from 'react-icons/fa'
import syncedWalletBanner from "../../../public/images/pictures/syncedWalletBanner.png"
import userImg from "../../../public/images/pictures/userImg.png"
import ethereum from "../../../public/images/pictures/ethereum-logo.png"

const BannerSection = () => {
  return (
    <Box
    position={'relative'} 
    h={'19rem'}
    bgImage={`url(${syncedWalletBanner.src})`}
    bgRepeat={'no-repeat'}
    bgSize={'cover'}
    bgPosition={'top center'}
    >
<Box position={'absolute'} right={{base:'1rem',md:'4rem'}} top={30} border="2px solid #fff" h={{base:'2.2rem',md:'3.625rem'}} w={{base:'2.2rem',md:'3.625rem'}} display='flex' alignItems='center'justifyContent='center'borderRadius='50%'>
<FormInput 
type={'file'} 
label={<Box fontSize={{base:"0.8rem",md:'1.5rem'}}><FaPen/></Box>} 
opacity={0} 
labelProps={{cursor:'pointer',transform:{base:'translate(10px, 30px)',md:'translate(15px, 30px)'}}}/>
</Box>

<Box w={190} position={'absolute'} right={{base:'25%',md:'45%'}} top={'50%'}>
<ChakraNextImage src={userImg} alt='userLogo'/>
<Text fontWeight={600} fontSize={'1.5rem'}>Daniel Arttiocon</Text>
<Flex justifyContent={'center'} gap={'0.5rem'}>
    <ChakraNextImage src={ethereum}/>
    <Text fontWeight={300} fontSize={'0.875rem'}>0xD03A098...213W0</Text>
</Flex>
</Box>

</Box> 
  )
}

export default BannerSection