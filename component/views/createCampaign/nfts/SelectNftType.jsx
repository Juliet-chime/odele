import HeaderTitle from '@/component/Heading/Heading'
import { Box, Center, Flex, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import WalletCard from './WalletCard'
import singleNft from '../../../../public/images/icons/singleNft.png'
import collectionNft from '../../../../public/images/icons/collectionNft.png'
import CustomButton from '@/component/button/CustomButton'
import { BsInfoCircle } from 'react-icons/bs'
import SelectNFTs from './SelectNFTs'
import CustomModal from '@/component/customModal/CustomModal'
import { nftCollection } from '@/component/data'
//import ComponentPagination from '@/component/componentPagination/ComponentPagination'

const SelectNftType = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [data, setData] = useState(nftCollection)

    const onshowSelectedNft = (type) => {
        const nftType = nftCollection.filter(item => item.type === type)
        setData(nftType)
        onOpen()
    }

    // console.log(nftCollection)

  return (
    <>
    <CustomModal
    modalBody={<SelectNFTs nftCollection={data}/>}
    isopen={isOpen}
    onclose={onClose}
    MaxW={'72.25rem'}
    />

    <Flex direction={'column'} gap={'3rem'} mt={"3rem"}>
    <HeaderTitle title="Select the type of NFT(s) you want to promote" lineHeight={"1.5rem"} fontWeight={'500'} fontSize={'1.5rem'} textAlign='center' /> 
    <Flex direction={{base:'column',md:'row'}} justifyContent='center' gap={'1.5rem'}>
        <WalletCard img={singleNft} title={'Single'} text={'Promote a single NFT within your synced wallet'} onClick={() => onshowSelectedNft('Single')}/>
        <WalletCard img={collectionNft} title={'Collection'} text={'Promote a NFT collection with your synced wallet'} onClick={() => onshowSelectedNft('Collection')}/>
    </Flex>
    <Flex direction={'column'} alignItems='center' gap='1.15rem'>
        <Text color={'#A3A3A3'} fontWeight={400}>Not sure? you can view all NFTs to select from</Text>
        <CustomButton text={'View all'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10.25rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={onOpen}/>
    </Flex>
   <Center>
   <Flex p='1.025rem' border='1.5px solid #353535' borderRadius='1rem' gap={'0.3rem'} color={'#A3A3A3'} fontSize={'0.875rem'}>
       <Flex as='span' alignItems={'center'} gap={'0.3rem'} color='#7F46F9'><BsInfoCircle fontSize={'1.15rem'}/> Note:</Flex>
            <Text>
            You cannot add single NFTs to a collection campaign
           </Text>
    </Flex>
   </Center>
    </Flex>
    </>
  )
}

export default SelectNftType