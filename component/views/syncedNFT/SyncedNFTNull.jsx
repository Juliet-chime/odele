import CustomButton from '@/component/button/CustomButton'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SyncedNFTNullState = () => {
  return (
    <Box 
    w={'full'}
    h={'21rem'}
    border={'2px solid #202020'} 
    boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
    borderRadius={'1.125rem'}
    display='flex'
    alignItems={'center'}
    justifyContent={'center'}
    >
        <Flex direction={'column'} gap={'1.5rem'}>
        <CustomButton text={'Sync Wallet'} border={'2px solid #7F46F9'} width={{ base: "6rem", md: '8.375rem' }} fontSize={'1rem'} fontWeight={'500'} />
            <Text fontWeight={300} fontSize={'0.875rem'}>Sync all NFTs in Wallet</Text>
        </Flex>
        </Box>
  )
}

export default SyncedNFTNullState