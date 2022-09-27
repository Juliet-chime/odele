import { Box, Flex, List, Text } from '@chakra-ui/react'
import React from 'react'
import CustomButton from '../button/CustomButton'
import FormInput from '../form/FormInput'
import { MdOutlineSearch } from "react-icons/md";
import { FaListUl } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { useAppContext } from 'context'

const SyncedNFTSearch = ({items,activeIndex,setActiveIndex}) => {
  const {activeNftCard, setActiveNftCard}=useAppContext()
  return (
    <Flex
    mt={'1rem'}
    direction={{base:'column',md:'row'}} 
    justifyContent={'space-between'} 
    alignContent={'center'} py={'1rem'} 
    borderBottom={'2px solid #202020'} 
    boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
    >


    <Flex gap={'1rem'}>
      {items.map((item,index) =>(
      <Box key={index}>
        <CustomButton
         text={
         <Text>
      {item.name && item.name} &nbsp;
      <Box as={'span'} color={activeIndex === index + 1 ? '#7F46F9':'#A3A3A3'}>
        {item.no && `(${item.no})`}
        </Box>
        </Text>
        } 
        color={activeIndex === index + 1 ? '#fff': '#A3A3A3'}
    bg={activeIndex === index + 1 ? '#202020': 'transparent'} 
    border={'1.125rem'} 
    width={{ base: "10rem", md: '11rem' }} 
    fontSize={'1rem'} 
    fontWeight={'500'} 
    onClick={()=>setActiveIndex(index + 1)}
    />
      </Box>))}

    </Flex>
    <Flex alignItems={'center'} gap={'1rem'}>

      <List display={'flex'} gap={'1rem'} alignItems={'center'}>
      {[...Array(2)].map((_, index) => {

    return <>
    <Box 
    as={'li'} 
    fontSize={'1.5rem'} 
    cursor={'pointer'}
    active={activeNftCard}
    onClick={()=>setActiveNftCard(index)}
    color={ activeNftCard === index ? 'white': '#727272'}
    >
    {index === 0 ? <FaListUl/> : <BsFillGrid3X3GapFill/>}
    </Box>
    </>
})}
      </List>
  
    <FormInput
    rightElement
    rightIcon={<MdOutlineSearch color={'#131313'}/>}
      h={'1rem'}
      border={'2px solid #131313'}
      placeholder={'Search by name'}
      p={'1rem'}
      bg={'#202020'}
    />

    </Flex>

 </Flex>
  )
}

export default SyncedNFTSearch