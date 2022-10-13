import CustomButton from '@/component/button/CustomButton'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const NftFormHeader = ({campaignNft,onDiscard,onSave}) => {
  return (
    <Flex gap={{base:'1rem',md:'0'}} alignItems={{base:'none',md:'center'}} direction={{base:'column',md:'row'}} justifyContent={{base:'none',md:'space-between'}}>
<Flex alignItems={'center'} gap={'1.5rem'}>
  <ChakraNextImage src={campaignNft}/>
  <Flex direction={'column'}>
  <HeaderTitle title="Honeyfox" fontSize={'1.5rem'} fontWeight={700} />
    <Text color={'#A3A3A3'} fontSize={'0.875rem'} fontWeight={300}>molax honey fox tale</Text>
  </Flex> 
</Flex>

<Flex gap={'1rem'}>
 <CustomButton text={'Discard'} bg={'#131313'} border={'2px solid #FF2828'} width={{ base: "100%", md: '5.938rem' }} fontSize={{base:'0.5rem',md:'0.875rem'}} fontWeight={'400'} onClick={onDiscard}/>
 <CustomButton text={'Save'} bg={'#131313'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '5.938rem' }} fontSize={{base:'0.5rem',md:'0.875rem'}} fontWeight={'400'} onClick={onSave}/>
</Flex>
</Flex>
  )
}

export default NftFormHeader