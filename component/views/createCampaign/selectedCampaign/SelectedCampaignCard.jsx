import CustomButton from '@/component/button/CustomButton'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {RiFileCopyLine} from 'react-icons/ri'
import ethereum from '../../../../public/images/pictures/ethereum-logo.png'

const SelectedCampaignCard = ({item}) => {
  return (
    <Box borderBottom='2px solid #202020' py='1.5rem'>
        <Flex alignItems={'center'} justifyContent='space-between' flexWrap={'wrap'}>
            <Flex alignItems={'center'} gap='1.5rem'>
                <ChakraNextImage src={item.image} width={103} height={103}/>
                <Box>
                    <HeaderTitle title={item.title} lineHeight={"1.5rem"} fontWeight={'700'} fontSize={'1.5rem'} />
                    <Text fontWeight={300} color='#A3A3A3' fontSize={'0.875rem'}>{item.text}</Text>
                </Box>
            </Flex>
            <Flex alignItems={'center'} gap='2rem'>
                <Flex alignItems={'center'} gap='0.5rem'>
                    <ChakraNextImage src={ethereum}/>
                    <Text fontWeight={500} fontSize='1.5rem'>{item.price}</Text>
                </Flex>
                <Flex alignItems={'center'} gap='2rem'>
                    <CustomButton
                     text={'Edit'} 
                     bg={'none'} 
                     border={'2px solid #727272'} 
                     width={{ base: "4rem", md: '6rem' }} 
                     fontSize={{base:'0.5rem',md:'1rem'}} 
                     fontWeight={'500'}
                     />
                    <FaTimes color='#FF2828'/>
                </Flex>
            </Flex>
        </Flex>

        <Flex mt='1.5rem' gap={{base:'1rem',md:'8rem'}} alignItems={'center'} direction={{base:'column',md:'row'}}>
            <Box>
                <Text fontWeight={500} color='#727272' fontSize={'1rem'} mb='0.5rem'>CTA</Text>
               <Text>{item.cta}</Text> 
            </Box>
           <Box>
           <Text fontWeight={500} color='#727272' fontSize={'1rem'} mb='0.5rem'>Destination URL</Text>
           <Flex alignItems={'center'} gap='0.5rem' cursor={'pointer'}>
<Text>{item.url.slice(0,33)}..</Text>
<RiFileCopyLine color='#727272' fontSize={'1.5rem'}/>
</Flex>
           </Box>
        </Flex>

        <Box mt='1.5rem'>
            <Text fontWeight={500} color='#727272' fontSize={'1rem'} mb='0.5rem'>NFT description</Text>
<Text maxW='50.625rem'>{item.description}</Text>
            </Box>
       
    </Box>
  )
}

export default SelectedCampaignCard