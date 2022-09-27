import HeaderTitle from '@/component/Heading/Heading'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import NFTDetailsCard from './NFTDetailsCard'
import etherum from "../../../../public/images/pictures/ethereum-logo.png"

const NFTDetails = () => {
  return (
   <Box mt={'3rem'}>
    <HeaderTitle title={'NFT Details'} fontWeight={700} fontSize={'1.5rem'} color={'#727272'} />
    <SimpleGrid columns={{base:'1',md:'4'}} spacing={'1.5rem'} mt={'1.5rem'}>
      <NFTDetailsCard
      title={'Creator'}
      name={'Anonymous-user-67888'}
      />
      <NFTDetailsCard
      title={'Owner'}
      name={'Bbay Chimp'}
      />
      <NFTDetailsCard
      title={'Contact Address'}
      name={'0xe0949...29A9'}
      />
      <NFTDetailsCard
      title={'Token ID'}
      name={'67888'}
      />
      <NFTDetailsCard
      title={'External Link'}
      name={'https://yoursite.io/chimp/0939'}
      />
      <NFTDetailsCard
      title={'Collection'}
      name={'None'}
      />
      <NFTDetailsCard
      title={'Blockchain'}
      name={'Ethereum'}
      icon={etherum}
      />
    </SimpleGrid>
    <Box   
    boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
    border={'2px solid #202020'}
    borderRadius={'1.125rem'}
    p={'1.5rem'}
    mt={'1.5rem'}
    >
      <Text mb={'0.5rem'} color={'#727272'} fontWeight={400}>Description</Text>
      <Text>
      Etiam vulputate elit ac lectus lobortis ornare. Donec finibus vel nibh sit amet pretium. Nunc ut urna sit amet lorem ornare pellentesque quis eu urna. In elementum bibendum cursus. Phasellus semper elementum lorem, et gravida purus venenatis sed. Nam viverra purus metus, ac accumsan sem dignissim non.
      </Text>
    {/* <FormTextarea
    value={'Etiam vulputate elit ac lectus lobortis ornare. Donec finibus vel nibh sit amet pretium. Nunc ut urna sit amet lorem ornare pellentesque quis eu urna. In elementum bibendum cursus. Phasellus semper elementum lorem, et gravida purus venenatis sed. Nam viverra purus metus, ac accumsan sem dignissim non.'}
              label={'Description'}
              border='none'
              //bg={'#0B0B0B'}
            /> */}
    </Box>
   </Box>
  )
}

export default NFTDetails