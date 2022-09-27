import CustomButton from '@/component/button/CustomButton'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ethereum from "../../../../public/images/pictures/ethereum-logo.png"

const NFTData = ({post}) => {
  return (
    <Flex gap={{base:'2rem',md:'3.875rem'}} direction={{base:'column',md:'row'}}>
    <Flex flex={1} justifyContent={'center'}>
    <ChakraNextImage src={post?.image} w={'auto'} />
    </Flex>
                <Flex direction={'column'} gap={'1rem'} flex={2}>
                    <HeaderTitle title={post?.title} fontWeight={800} fontSize={'2rem'} />
                    <Box bg={'#202020'} p={'1.5rem'} borderRadius={'1.125rem'}>
                        <Text>NFT Price</Text>
                        <Flex alignItems={'center'} gap={'0.5rem'}>
                            <Flex alignItems={'center'} gap={'0.5rem'}>                
                                <ChakraNextImage src={ethereum} />
                                <Text fontSize={'2rem'} fontWeight={400}>{post?.rate}</Text>
                                </Flex>
                            <Text fontSize={'0.875rem'} color={'#A3A3A3'}>($3,400,670.00)</Text>
                        </Flex>
                    </Box>
    
                    <Flex p={'1.75rem'} border={'2px solid #202020'} boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'} borderRadius={'1.125rem'}>
                        <Text fontWeight={300} fontSize={'0.875rem'}>Owned by &nbsp; <Box as={'span'} fontSize={'1rem'} fontWeight={500}>Bbay Chimp</Box> </Text>
                        <Flex></Flex>
                    </Flex>
    
                    <Flex gap={'1.125rem'} p={'2.5rem'} border={'2px solid #202020'} boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'} borderRadius={'1.125rem'}>
                    <CustomButton text={'View Campaigns'} width={{ base: "100%", md: '12rem' }} border={'2px solid #727272'} fontSize={{base:'0.7rem',md:'1rem'}} fontWeight={'500'} />
                    <CustomButton text={'External Link'} width={{ base: "100%", md: '12rem' }} border={'2px solid #7F46F9'} fontSize={{base:'0.7rem',md:'1rem'}} fontWeight={'500'} />
                    </Flex>
                </Flex>
            </Flex>
  )
}

export default NFTData