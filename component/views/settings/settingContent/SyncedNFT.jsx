
import { Box, SimpleGrid} from '@chakra-ui/react'
import React, { useState } from 'react'
import { syncedNFT } from '@/component/data'
import SyncedNftCard from '@/component/syncedNFTCard/SyncedNftCard'
import SyncedNFTHeader from '@/component/syncedNFTHeader/SyncedNFTHeader'
import SyncedNFTSearch from '@/component/syncedNftSearch/SyncedNFTSearch'

const SyncedNFT = () => {
  
  const [activeIndex , setActiveIndex] = useState(1)

  return (
    <Box>
      <SyncedNFTHeader header={'Synced NFTs'} text={'12 Synced NFTs'}/>
      <SyncedNFTSearch items={syncedNFT} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
         <SimpleGrid px={{base:'1rem',md:'0'}} mt={'2rem'} columns={{base:1,md:3}} spacing='2rem'>
          { syncedNFT[activeIndex - 1].content.map((items,index) => (
            <SyncedNftCard item={items} 
            button
            key={items.id} 
            text={activeIndex === 1 ? 'Create Campaigns': 'View Campaigns'}
            border={activeIndex === 1 ?'2px solid #7F46F9': '2px solid #727272'}/>
          ))}
         </SimpleGrid>
    </Box>
  )
}

export default SyncedNFT