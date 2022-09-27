import { syncedNFT } from '@/component/data'
import SyncedNftCard from '@/component/syncedNFTCard/SyncedNftCard'
import SyncedNFTHeader from '@/component/syncedNFTHeader/SyncedNFTHeader'
import SyncedNFTLongCard from '@/component/syncedNFTLongCard/SyncedNFTLongCard'
import SyncedNFTSearch from '@/component/syncedNftSearch/SyncedNFTSearch'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useAppContext } from 'context'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import BannerSection from './BannerSection'
import SyncedNFTNullState from './SyncedNFTNull'

const SyncedNFTPage = () => {
  
  const {activeIndex,setActiveIndex,activeNftCard} = useAppContext()
  //const {activeNftCard, setActiveNftCard}=useAppContext()
  return (
    <Box px={{base:'1rem',md:'3rem'}} py={'1.5rem'} color={'white'}>
      <BannerSection/>
      <Box mt={'8rem'}>
      <SyncedNFTHeader 
      header={'Synced NFTs'} 
      text={'0 Synced NFTs'} 
      fontSize={{base:'0.8rem',md:'1rem'}}
      button 
      width={{base:'11rem',md:'14rem'}} 
      border={'2px solid #7F46F9'} 
      leftIcon={<FaPlus fontSize={'1rem'}/>} 
      btnText={<Text fontSize={'1rem'}>Create campaign</Text>}
    />
      </Box>
      <SyncedNFTSearch items={syncedNFT} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      
      {syncedNFT[activeIndex - 1].content.length > 0 ? 
      <SimpleGrid px={{base:'1rem',md:'0'}} mt={'2rem'} columns={{base:1,md: activeNftCard === 0 ? 2:4}} spacing='2rem'>
      { syncedNFT[activeIndex - 1].content.map((items,index) => {
        return activeNftCard === 0 ? (
          <SyncedNFTLongCard item={items} 
          key={items.id} />
        ) : (<SyncedNftCard item={items} 
          key={items.id} 
          justifyContent={'flex-end'}
          text={activeIndex === 1 ? 'Create Campaigns': 'View Campaigns'}
          border={activeIndex === 1 ?'2px solid #7F46F9': '2px solid #727272'}/>)
      })}
     </SimpleGrid>
       : <SyncedNFTNullState/>
       }
    </Box>
  )
}

export default SyncedNFTPage