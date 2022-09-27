import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ChakraNextImage from '../chakraNextImage/ChakaraNextImage'
import HeaderTitle from '../Heading/Heading'
import ethereum from "../../public/images/pictures/ethereum-logo.png"
import Link from 'next/link'

const SyncedNFTLongCard = ({item}) => {
  console.log(item.id)
  return (
<Link href={`/syncedNFT/${item.id}`} passHref>
<Flex 
w={{base:'100%',md:'39rem'}}
h={{base:'90%',md:'9rem'}} 
border={'2px solid #202020'} 
boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
alignItems={'center'}
justifyContent={'space-between'}
cursor={"pointer"}
>
    <Flex alignItems={'center'} gap={'2.125rem'}>
    <Box>
        <ChakraNextImage src={item.image} width={180} height={150}/>
    </Box>
    <Box>
    <HeaderTitle mb={'0.5rem'} title={item.title} lineHeight={"1.375rem"} fontWeight={'700'} fontSize={'sm'} />
    <Text mb={'0.5rem'} fontWeight={300} fontSize={'0.875rem'} color={'white'}>
        {item.name}
    </Text>
    </Box>

    </Flex>

    <Flex gap={'0.5rem'} px={'0.5rem'}>
    <ChakraNextImage src={ethereum}/>
  <Text fontWeight={300} fontSize={'0.875rem'}>
        {item.rate}
    </Text>
    </Flex>
</Flex>
</Link>
  )
}

export default SyncedNFTLongCard