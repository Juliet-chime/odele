import FormInput from '@/component/form/FormInput'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { FaRegCopy } from 'react-icons/fa'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from '@/component/button/CustomButton'
import CreateCampaignHeader from '../../CreateCampaignHeader'

const CampaignDetails = ({ next, previous }) => {
    const [startDate, setStartDate] = useState();
    return (
        <Box>
            <Flex 
            border='1px solid #353535'
            borderRadius='1.125rem'
            padding={'1rem'}
            fontSize={'0.875rem'}
            color={'#A3A3A3'}
            mb={'1.5rem'}
            >A campaign focuses on single or group of NFTs called collection. To create a campaign, you’ll set a budget, choose your target location, audience and write your keywards. Bear in mind that you won’t be charged for selecting options, and you can always make changes later.</Flex>
            <CreateCampaignHeader title={'Campaign details'}/>
           <Box mt={'2rem'}>
           <form>
                <Flex gap={'3.5rem'} direction={{ base: 'column', md: 'row' }}>
                    <Box flex={1}>
                        <FormInput
                            label={'Campaign name'}
                            placeholder={'Name your campaign'}
                            labelProps={{ color: '#636363', fontSize: '1rem' }}
                            p={'2rem'}
                            border='1px solid #353535'
                            bg={'#0B0B0B'}
                        />
                    </Box>
                    <Box position={'relative'} flex={1}>
                        <FormInput
                            label={<Text>Fund source <Box as='span' color='#7F46F9'>wallet address</Box></Text>}
                            placeholder={'Name your campaign'}
                            labelProps={{ color: '#636363', fontSize: '1rem' }}
                            p={'2rem'}
                            border='1px solid #353535'
                            bg={'#0B0B0B'}
                        />

                        <Box position={'absolute'} right={10} bottom={6} color='#727272' fontSize={'1.2rem'}> <FaRegCopy /></Box>
                    </Box>
                </Flex><br />

                <Flex gap={'3.5rem'} direction={{ base: 'column', md: 'row' }}>
                    <Box position={'relative'} flex={1}>
                        <FormInput
                            type={'number'}
                            label={
                                <Flex alignItems={'center'} gap='0.5rem'>
                                    <Text>Daily budget</Text>
                                    <Text color='#7F46F9'><BsInfoCircle /></Text>
                                </Flex>
                            }
                            placeholder={'Enter your daily budget'}
                            placeholderStyle={{ pl: { base: '3.8rem', md: '5rem' } }}
                            labelProps={{ color: '#636363', fontSize: '1rem' }}
                            p={'2rem'}
                            border='1px solid #353535'
                            bg={'#0B0B0B'}
                        />

                        <Box
                            w={'5.438rem'}
                            h={'3.5rem'}
                            bg='#202020'
                            display={'flex'}
                            alignItems='center'
                            justifyContent={'center'}
                            borderRadius='29px 0px 0px 29px'
                            position={'absolute'}
                            left={1}
                            bottom={3}
                            color='#727272'
                            fontSize={'1.2rem'}>USD</Box>
                    </Box>
                    <Box position={'relative'} flex={1}>
                        <FormInput
                            type={'number'}
                            label={
                                <Flex alignItems={'center'} gap='0.5rem'>
                                    <Text>Total budget (optional)</Text>
                                    <Text color='#7F46F9'><BsInfoCircle /></Text>
                                </Flex>
                            }
                            placeholder={'Enter your total budget'}
                            placeholderStyle={{ pl: { base: '3.8rem', md: '5rem' } }}
                            labelProps={{ color: '#636363', fontSize: '1rem' }}
                            p={'2rem'}
                            border='1px solid #353535'
                            bg={'#0B0B0B'}
                        />

                        <Box
                            w={'5.438rem'}
                            h={'3.5rem'}
                            bg='#202020'
                            display={'flex'}
                            alignItems='center'
                            justifyContent={'center'}
                            borderRadius='29px 0px 0px 29px'
                            position={'absolute'}
                            left={1}
                            bottom={3}
                            color='#727272'
                            fontSize={'1.2rem'}>USD</Box>
                    </Box>
                </Flex><br />

                <Flex gap={'3.5rem'} direction={{ base: 'column', md: 'row' }}>

                    <Flex flex={1} direction={{ base: 'column', md: 'row' }} >
                        <Box flex={1}>
                            <Flex alignItems={'center'} gap='0.5rem'>
                                <Text color={'#636363'} fontWeight={400}>Start date</Text>
                                <Text color='#7F46F9'><BsInfoCircle /></Text>
                            </Flex>
                            <DatePicker className='scheduleDateInput' placeholderText="Set date" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </Box>

                        <Box flex={1}>
                            <Flex></Flex><br />
                            <FormInput
                                type='time'
                                placeholder={'Enter time (e.g 12:45)'}
                                labelProps={{ color: '#636363', fontSize: '1rem' }}
                                p={'2rem'}
                                border='1px solid #353535'
                                bg={'#0B0B0B'}
                            />
                        </Box>
                    </Flex>

                    <Flex flex={1} direction={{ base: 'column', md: 'row' }}>
                        <Box flex={1}>
                            <Flex alignItems={'center'} gap='0.5rem'>
                                <Text color={'#636363'} fontWeight={400}>End date</Text>
                                <Text color='#7F46F9'><BsInfoCircle /></Text>
                            </Flex>
                            <DatePicker className='scheduleDateInput' placeholderText="Set date" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </Box>
                        <Box flex={1}>
                            <Flex></Flex><br />
                            <FormInput
                                type='time'
                                placeholder={'Enter time (e.g 12:45)'}
                                labelProps={{ color: '#636363', fontSize: '1rem' }}
                                p={'2rem'}
                                border='1px solid #353535'
                                bg={'#0B0B0B'}
                            />
                        </Box>
                    </Flex>
                </Flex>
            </form>
           </Box>
           <Flex justifyContent={'center'} gap={'1rem'} mt={'2rem'}>
           <CustomButton text={'Discard'} bg={'#404040'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.7rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
            <CustomButton text={'Save as Draft'} bg={'#151515'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.7rem',md:'1rem'}} fontWeight={'500'} onClick={previous} />
           <CustomButton text={'Next'} bg={'#7F46F9'} border={'2px solid #fff'} width={{ base: "100%", md: '10rem' }} fontSize={{base:'0.7rem',md:'1rem'}} fontWeight={'500'} onClick={next} />
           </Flex>
        </Box>
    )
}

export default CampaignDetails