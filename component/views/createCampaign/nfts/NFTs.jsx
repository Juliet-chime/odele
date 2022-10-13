import CustomButton from '@/component/button/CustomButton'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CreateCampaignHeader from '../CreateCampaignHeader'
import campaignNft from '../../../../public/images/pictures/campaignNft.png'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import NftFormHeader from './NftFormHeader'
import NftForm from './NftForm'
import SelectNftType from './SelectNftType'

const NFTs = ({next,previous}) => {

  const [showForm, setShowForm] = useState(false)
  const [formValue, setFormValue] = useState({
    price:'',
    cta:'',
    url:''
  })
  const [listNfts, setListNfts] = useState([])

  const onAddNft = () => {
    setShowForm(!showForm)
  }

  const onFieldchange = (e) => {
     setFormValue({...formValue,[e.target.name]:e.target.value})
  }

  console.log(formValue.price)

  const onSave = () => {
    setListNfts([...listNfts,{id:listNfts.length + 1, price:formValue.price,cts:formValue.cta,url:formValue.url}])
  }

  console.log(listNfts,'listtt')


  return (
    <Box>
    <CreateCampaignHeader title={'NFTs'} />
    <SelectNftType/>

{showForm && 
<Box
mt={'1.5rem'}
p={'1.5rem'}
border={'2px solid #202020'}
borderRadius={'1.125rem'}
boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
>
<NftFormHeader campaignNft={campaignNft} onSave={onSave}/>

{/* <NftForm dataValue={formValue} onFieldchange={onFieldchange}/> */}
</Box>

}

         <Flex justifyContent={'center'} gap={'1rem'} mt={'2rem'}>
         <CustomButton text={'Discard'} bg={'#404040'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
          <CustomButton text={'Save as Draft'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
          <CustomButton text={'Previous'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
          <CustomButton text={'Next'} bg={'#7F46F9'} border={'2px solid #fff'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={next} />
            </Flex>
    </Box>
  )
}

export default NFTs