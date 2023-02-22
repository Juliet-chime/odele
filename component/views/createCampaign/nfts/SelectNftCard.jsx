import CustomButton from '@/component/button/CustomButton'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import FormCustomCheckBox from '@/component/form/FormCustomCheckbox'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ethereum from '../../../../public/images/pictures/ethereum-logo.png'

const SelectNftCard = ({ item, isCheckBox = true }) => {
    console.log({ item })

    const [addCampaign, setAddCampaign] = useState(false)
    const [checked, setChecked] = useState(false)
    const [selectCampaign, setSelectedCampaign] = useState([])

    const onChangeItem = (e,item) => {
        if (e.target.checked) {
            setChecked(true)
      let values = e.currentTarget.value
      console.log({values})
      let items = [...selectCampaign, values]
      let uniqueItems = [...new Set(items)];
      setSelectedCampaign(uniqueItems)
        }
    }

    console.log({ selectCampaign })

    return (

        <>
            {isCheckBox ? <FormCustomCheckBox Element={'Flex'} labelStyle={{color:'white', display: 'flex', justifyContent: 'space-between' }} value={item} onChangeInputProps={(e) => onChangeItem(e,item)}>
                <Flex w='100%' color={'white'} direction={{base:'column',md:'row'}} mb={"1rem"} borderRadius='1.125rem 0px 0px 1.125rem' alignItems={{base:'none',md:'center'}} justifyContent={{base:'none',md:'space-between'}} gap={{base:'0.5rem',md:0}} p={{base:'0.5rem',md:0}}>
                    <Flex alignItems={'center'} gap='1.5rem'>
                        <ChakraNextImage src={item.image} width={100} height={90} imgStyle={{ borderRadius: '1.125rem 0 0 1.125rem' }} />
                        <Box>
                            <HeaderTitle title={item.title} lineHeight={"1.5rem"} fontWeight={'700'} fontSize={'1.5rem'} textAlign='center' />
                            <Text fontWeight={300} fontSize={'0.875rem'}>{item.text}</Text>
                        </Box>
                    </Flex>

                    <Flex alignItems={'center'} gap={'1.125rem'}>

<Flex alignItems={'center'} gap={'1.125rem'}>
<Flex alignItems={'center'} gap='0.5rem'>
<ChakraNextImage src={ethereum}/>
<Text fontSize={{base:'0.5rem',md:'1rem'}}>{item.price}</Text>
</Flex>
<Text 
borderRadius='1.5rem'
p={{base:'0.5rem',md:'1rem'}}
fontSize={{base:`${item.type === 'Single' ? '0.8rem' : '0.6rem'}`,md:'1rem'}}
background={`${item.type === 'Single' ? 'rgba(49, 102, 239, 0.1)' : 'rgba(127, 70, 249, 0.1)'}`}
color={`${item.type === 'Single' ? '#3166EF' : '#7F46F9'}`}
>
{item.type}
</Text>
{item.total && <Text color={'#A3A3A3'} fontSize={{base:'0.5rem',md:'1rem'}}>{item.total} NFT</Text>}
</Flex>

<Flex alignItems={'center'} gap='1rem'>
<CustomButton text={'View profile'} bg={'#202020'} border={'2px solid #202020'} width={{ base: "3.5rem", md: '7.5rem' }} fontSize={{base:'0.45rem',md:'0.875rem'}} fontWeight={'500'} />
{addCampaign ? <CustomButton text={'Remove from campaign'} bg={'#202020'} border={'2px solid #FF2828'} width={{ base: "5rem", md: '12.5rem' }} fontSize={{base:'0.5rem',md:'0.875rem'}} fontWeight={'500'} /> : <CustomButton text={'Add to campaign'} bg={'#202020'} border={'2px solid #727272'} width={{ base: "4.5rem", md: '9.875rem' }} fontSize={{base:'0.45rem',md:'0.875rem'}} fontWeight={'500'} onClick={()=>setAddCampaign(true)}/>}
</Flex>
    </Flex>

                </Flex>
                {/* 
        <Flex direction={{base:'column',md:'row'}} mb={"1rem"} border='2px solid #202020' borderRadius='1.125rem 0px 0px 1.125rem' alignItems={{base:'none',md:'center'}} justifyContent={{base:'none',md:'space-between'}} gap={{base:'0.5rem',md:0}} p={{base:'0.5rem',md:0}}>
            <Flex alignItems={'center'} gap='1.5rem'>
 <ChakraNextImage src={item.image} width={100} height={90} imgStyle={{borderRadius: '1.125rem 0 0 1.125rem'}}/>
<Box>
<HeaderTitle title={item.title} lineHeight={"1.5rem"} fontWeight={'700'} fontSize={'1.5rem'} textAlign='center' /> 
<Text fontWeight={300} fontSize={'0.875rem'}>{item.text}</Text>
</Box>

            </Flex>

            <Flex alignItems={'center'} gap={'1.125rem'}>

<Flex alignItems={'center'} gap={'1.125rem'}>
    <Flex alignItems={'center'} gap='0.5rem'>
        <ChakraNextImage src={ethereum}/>
        <Text fontSize={{base:'0.5rem',md:'1rem'}}>{item.price}</Text>
    </Flex>
    <Text 
    borderRadius='1.5rem'
    p={{base:'0.5rem',md:'1rem'}}
    fontSize={{base:`${item.type === 'Single' ? '0.8rem' : '0.6rem'}`,md:'1rem'}}
    background={`${item.type === 'Single' ? 'rgba(49, 102, 239, 0.1)' : 'rgba(127, 70, 249, 0.1)'}`}
    color={`${item.type === 'Single' ? '#3166EF' : '#7F46F9'}`}
    >
    {item.type}
    </Text>
    {item.total && <Text color={'#A3A3A3'} fontSize={{base:'0.5rem',md:'1rem'}}>{item.total} NFT</Text>}
</Flex>

<Flex alignItems={'center'} gap='1rem'>
<CustomButton text={'View profile'} bg={'#202020'} border={'2px solid #202020'} width={{ base: "3.5rem", md: '7.5rem' }} fontSize={{base:'0.45rem',md:'0.875rem'}} fontWeight={'500'} />
{addCampaign ? <CustomButton text={'Remove from campaign'} bg={'#202020'} border={'2px solid #FF2828'} width={{ base: "5rem", md: '12.5rem' }} fontSize={{base:'0.5rem',md:'0.875rem'}} fontWeight={'500'} /> : <CustomButton text={'Add to campaign'} bg={'#202020'} border={'2px solid #727272'} width={{ base: "4.5rem", md: '9.875rem' }} fontSize={{base:'0.45rem',md:'0.875rem'}} fontWeight={'500'} onClick={()=>setAddCampaign(true)}/>}
</Flex>
            </Flex>
        </Flex> */}

            </FormCustomCheckBox>
                : <Flex direction={{ base: 'column', md: 'row' }} mb={"1rem"} border='2px solid #202020' borderRadius='1.125rem 0px 0px 1.125rem' alignItems={{ base: 'none', md: 'center' }} justifyContent={{ base: 'none', md: 'space-between' }} gap={{ base: '0.5rem', md: 0 }} p={{ base: '0.5rem', md: 0 }}>
                    <Flex alignItems={'center'} gap='1.5rem'>
                        <ChakraNextImage src={item.image} width={100} height={90} imgStyle={{ borderRadius: '1.125rem 0 0 1.125rem' }} />
                        <Box>
                            <HeaderTitle title={item.title} lineHeight={"1.5rem"} fontWeight={'700'} fontSize={'1.5rem'} textAlign='center' />
                            <Text fontWeight={300} fontSize={'0.875rem'}>{item.text}</Text>
                        </Box>

                    </Flex>

                    <Flex alignItems={'center'} gap={'1.125rem'}>

                        <Flex alignItems={'center'} gap={'1.125rem'}>
                            <Flex alignItems={'center'} gap='0.5rem'>
                                <ChakraNextImage src={ethereum} />
                                <Text fontSize={{ base: '0.5rem', md: '1rem' }}>{item.price}</Text>
                            </Flex>
                            <Text
                                borderRadius='1.5rem'
                                p={{ base: '0.5rem', md: '1rem' }}
                                fontSize={{ base: `${item.type === 'Single' ? '0.8rem' : '0.6rem'}`, md: '1rem' }}
                                background={`${item.type === 'Single' ? 'rgba(49, 102, 239, 0.1)' : 'rgba(127, 70, 249, 0.1)'}`}
                                color={`${item.type === 'Single' ? '#3166EF' : '#7F46F9'}`}
                            >
                                {item.type}
                            </Text>
                            {item.total && <Text color={'#A3A3A3'} fontSize={{ base: '0.5rem', md: '1rem' }}>{item.total} NFT</Text>}
                        </Flex>

                        <Flex alignItems={'center'} gap='1rem'>
                            <CustomButton text={'View profile'} bg={'#202020'} border={'2px solid #202020'} width={{ base: "3.5rem", md: '7.5rem' }} fontSize={{ base: '0.45rem', md: '0.875rem' }} fontWeight={'500'} />
                            {addCampaign ? <CustomButton text={'Remove from campaign'} bg={'#202020'} border={'2px solid #FF2828'} width={{ base: "5rem", md: '12.5rem' }} fontSize={{ base: '0.5rem', md: '0.875rem' }} fontWeight={'500'} /> : <CustomButton text={'Add to campaign'} bg={'#202020'} border={'2px solid #727272'} width={{ base: "4.5rem", md: '9.875rem' }} fontSize={{ base: '0.45rem', md: '0.875rem' }} fontWeight={'500'} onClick={() => setAddCampaign(true)} />}
                        </Flex>
                    </Flex>
                </Flex>
            }
        </>

    )
}

export default SelectNftCard