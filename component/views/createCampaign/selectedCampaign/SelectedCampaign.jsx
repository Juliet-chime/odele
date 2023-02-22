import CustomButton from '@/component/button/CustomButton'
import ComponentPagination from '@/component/componentPagination/ComponentPagination'
import { nftCollection } from '@/component/data'
import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import NftForm from '../nfts/NftForm'
import SelectedCampaignCard from './SelectedCampaignCard'

const SelectedCampaign = ({previous, next}) => {

    const onFieldchange = (e) => {
        setFormValue({...formValue,[e.target.name]:e.target.value})
     }
    
     const [formValue, setFormValue] = useState({
      price:'',
      cta:'',
      url:''
    })

  return (
    <Box
     p={{base:'1rem',md:'2rem 4rem'}}
     >
       <Box>
       <NftForm dataValue={formValue} onFieldchange={onFieldchange}/>

<ComponentPagination
  data={nftCollection}
  RenderComponent={SelectedCampaignCard}
  pageLimit={10}
  dataLimit={3}
  totalText={'NFTs in total'}
  backtoTop
  showTotalLength
/>
       </Box>

       <Flex justifyContent={'center'} gap={'1rem'} mt={'2rem'}>
         <CustomButton text={'Discard'} bg={'#404040'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
            <CustomButton text={'Save as Draft'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
                <CustomButton text={'Previous'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
                <CustomButton text={'Next'} bg={'#7F46F9'} border={'2px solid #fff'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={next} />
            </Flex>
    </Box>
  )
}

export default SelectedCampaign