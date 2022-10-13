import FormInput from '@/component/form/FormInput'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { FaCaretDown, FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa'
import CreateCampaignHeader from '../CreateCampaignHeader'
import { colorData } from '@/component/data'
import CustomButton from '@/component/button/CustomButton'

const Keywords = ({next,previous}) => {
    const [keywordsValue, setKeywordValue] = useState("");
    const [keywordData,setKeywordData] = useState([])

    const onKeywordChange = (event) => {
        setKeywordValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setKeywordValue(searchTerm);
        setKeywordData([...keywordData,searchTerm])
        // our api to fetch the search result
        setKeywordValue('');
        console.log("search ", searchTerm);
      };

      const deleteItem = (id) => {
        const filterData = keywordData.filter((_, index) => index !== id)
        setKeywordData(filterData)
      }

    return (
        <Box>
            <CreateCampaignHeader title={'KeyWords'} />

            <Box 
            mt={'1rem'} 
            boxShadow='0px 10px 24px rgba(0, 0, 0, 0.18)' 
            border='2px solid #202020' 
            borderRadius={'1.125rem'} 
            px={{base:'1rem',md:'1.7rem'}} py={'2rem'}>
                <Flex alignItems={'center'} gap='0.5rem' mb='0.5rem'>
                    <Text>Keywords</Text>
                    <Text color='#7F46F9'><BsInfoCircle /></Text>
                </Flex>
                <form action="">
                    <Flex position={'relative'} alignItems='center' border='1px solid #353535' borderRadius={'2.375rem'} px='1rem'>
                        <Box
                            w={'8.688rem'}
                            h={'3.2rem'}
                            bg='#202020'
                            display={'flex'}
                            alignItems='center'
                            justifyContent={'center'}
                            borderRadius='29px 0px 0px 29px'
                            color='#727272'
                            fontSize={'1rem'}>Include &nbsp; <FaChevronDown /></Box>
                        <FormInput
                            type='text'
                            isInvalid={false}
                            value={keywordsValue}
                            onChange={onKeywordChange}
                            rightElement
                            rightElementStyle={{ right: '3', top: '2' }}
                            rightIcon={<FaSearch color='#727272' />}
                            placeholder={'search'}
                            labelProps={{ color: '#636363', fontSize: '1rem' }}
                            p={'1rem'}
                            fontSize={'1rem'}
                            border="none"
                            bg={'none'}
                        />

                    </Flex>
                </form>
                {
                    keywordsValue.length > 0 && <Box 
                    boxShadow='0px 10px 24px rgba(0, 0, 0, 0.18)' 
                    // border={'solid red'} 
                    w={'50%'} 
                    p={'1rem'}>
                            {colorData.filter((item) => {
                  const searchTerm = keywordsValue.toLowerCase();
                  const colorName = item.color.toLowerCase();
                   
                  return (
                    searchTerm &&
                    colorName.startsWith(searchTerm) &&
                    colorName !== searchTerm
                  );
    
                }).map(items => (
                    <>
                    <Box cursor={'pointer'} onClick={()=>onSearch(items.color)}>{items.color}</Box>
                    </>
                ))
    
            }
                            </Box>
                }
                <Flex mt={'1rem'} gap={'1rem'} flexWrap={'wrap'}>
{keywordData.length > 0 ? keywordData.map((keyword,index) => (
    <Flex 
    key={keyword} 
    cursor={'pointer'} 
    alignItems={'center'} 
    gap={'0.813rem'} 
    px={'1rem'} 
    py={'0.75rem'} 
    border='2px solid #353535' 
    borderRadius={'1.5rem'}>
        <Text>{keyword}</Text>
        <FaTimes color='#FF2828' onClick={()=>deleteItem(index)}/>
    </Flex>
)) : null}
                </Flex>
            </Box>
            <Flex justifyContent={'center'} gap={'1rem'} mt={'2rem'}>
            <CustomButton text={'Discard'} bg={'#404040'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
            <CustomButton text={'Save as Draft'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
            <CustomButton text={'Previous'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
           <CustomButton text={'Next'} bg={'#7F46F9'} border={'2px solid #FFF'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.5rem',md:'1rem'}} fontWeight={'500'} onClick={next} />
           </Flex>
        </Box>
    )
}

export default Keywords