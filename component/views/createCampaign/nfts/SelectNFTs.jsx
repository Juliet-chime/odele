import CustomButton from '@/component/button/CustomButton'
import ComponentPagination from '@/component/componentPagination/ComponentPagination'
import FormCustomCheckBox from '@/component/form/FormCustomCheckbox'
//import { nftCollection } from '@/component/data'
import FormInput from '@/component/form/FormInput'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import SelectNftCard from './SelectNftCard'

const SelectNFTs = ({nftCollection}) => {

console.log(nftCollection)

    return (
        <Box>
            <Flex alignItems={'center'} justifyContent={'space-between'} borderBottom='1.2px solid #202020' mt={'3rem'} pb='0.5rem'>
                <HeaderTitle title="Select NFT(s)" lineHeight={"1.5rem"} fontWeight={'800'} fontSize={{base:'1rem',md:'1.5rem'}} />
                <Box>
                    <FormInput
                        name={'searchnft'}
                        rightElement
                        rightElementStyle={{ right: '3', top: '1' }}
                        rightIcon={<FaSearch color='#727272' />}
                        // value={dataValue.cta}
                        // onChange={onFieldchange}
                        placeholder={'Search by name'}
                        p={'1rem'}
                        border='1px solid #353535'
                        bg={'#353535'}
                    />
                </Box>
            </Flex>

            <Flex direction={{base:'column',md:'row'}} justifyContent={'space-between'} mt='1.5rem' gap={{base:'1rem',md:0}}>

            <Flex p='1.025rem' border='1.5px solid #353535' borderRadius='1rem' gap={'0.3rem'} color={'#A3A3A3'} fontSize={'0.875rem'}>
       <Flex as='span' alignItems={'center'} gap={'0.3rem'} color='#7F46F9'><BsInfoCircle fontSize={'1.15rem'}/> Note:</Flex>
            <Text>
            You cannot add single NFTs to a collection campaign
           </Text>
    </Flex>

    <Flex alignItems={'center'} gap='1.125rem'>
        <Box bg="#321E5E" borderRadius='2.375rem' p={'0.875rem 1.5rem'} fontSize={{base:'0.6rem',md:'1rem'}}>3 NFT(s) added to campaign</Box>
<Box><CustomButton text={'Done'} bg={'#7F46F9'} border={'2px solid #fff'} width={{ base: "7.25rem", md: '7.25rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} /></Box>
    </Flex>

            </Flex>

           <SimpleGrid mt={'2rem'}>
           <ComponentPagination
          data={nftCollection}
          RenderComponent={SelectNftCard}
          pageLimit={10}
          dataLimit={5}
          next
          showTotalLength
          totalText={'in total'}
        />
           </SimpleGrid>
        </Box>
    )
}

export default SelectNFTs