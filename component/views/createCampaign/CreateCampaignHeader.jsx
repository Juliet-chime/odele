import CustomButton from '@/component/button/CustomButton'
import HeaderTitle from '@/component/Heading/Heading'
import { Box,Flex, Text } from '@chakra-ui/react'
import React from 'react'

const CreateCampaignHeader = ({title,NFTType,clearAll,addNFT,onClearAll,onAddNFT}) => {
  return (
<Flex alignItems={'center'} justifyContent={"space-between"} pb={'1rem'} borderBottom='2px solid #353535'>
<HeaderTitle title={title} fontWeight={'700'} fontSize={{ base: '1rem', md: '1.5rem' }} lineHeight={'2.785rem'}  color={'brand.grayText'} />
<Flex alignItems={'center'} gap='1.5rem'>
  {NFTType && <Text bg='rgba(49, 102, 239, 0.1)' borderRadius={'1.5rem'} padding= '0.75rem 1.063rem' color={'#3166EF'} fontSize={'0.875rem'} fontWeight={400}>{NFTType}</Text>}
  {clearAll && <CustomButton text={'Clear all'} bg={'#131313'} border={'2px solid #FF2828'} width={{ base: "100%", md: '6rem' }} fontSize={{base:'0.5rem',md:'0.875rem'}} fontWeight={'400'} onClick={onClearAll}/>}
  {addNFT && <CustomButton text={'Add NFT'} bg={'#131313'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '6rem' }} fontSize={{base:'0.5rem',md:'0.875rem'}} fontWeight={'400'} onClick={onAddNFT}/>}
</Flex>
</Flex>
  )
}

export default CreateCampaignHeader