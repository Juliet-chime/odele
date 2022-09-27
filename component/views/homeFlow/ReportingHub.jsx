import CustomButton from '@/component/button/CustomButton'
import { campaignData, reportingHubData, topLocationData, topPlacementData } from '@/component/data'
import FormSelect from '@/component/form/FormSelect'
import HeaderTitle from '@/component/Heading/Heading'
import ReportingHubCard from '@/component/reportingHubCard/ReportingHubCard'
import CustomsTable from '@/component/table/Table'
import TopView from '@/component/topView/TopView'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { campaginColumnsData } from './campaignColumnData'
import CampaignNullState from './CampaignNullState'
import Chart from './Chart'
import HomeNav from './HomeNav'
import { toplocationColumnsData } from './topLocationColumn'
import { topPlacementColumnsData } from './topPlacementColumn'

const options = ['Aug', 'Sept', 'Oct']

const ReportingHub = () => {
    return (
        <Box px={{ base: '1rem', md: '3rem' }} py={{ base: '2rem', md: '4.563rem' }} color='white'>
            <HeaderTitle title="Home" fontWeight={'800'} fontSize={'xxl'} lineHeight={'2.785rem'} pb={'1rem'} />
            <Text fontSize={'1.125rem'} color={'#A3A3A3'} fontWeight={500}>Reporting Hub</Text>
            <HomeNav options={options} />
            <SimpleGrid
                mt={'1.125rem'}
                columns={{ base: 2, md: 6 }}
                spacing={{ base: '20px', md: 0 }}
                border='2px solid #202020'
                borderRadius={'1.125rem'}
                boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}>
                {reportingHubData.map((item, index) => (
                    <>
                        <ReportingHubCard item={item} index={index} />
                    </>
                ))}
            </SimpleGrid>
            <Chart/>
            <Box border={'2px solid #202020'} mt={'1rem'} borderRadius={'1.125rem'} boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Text  pl={'1.5rem'}pr={'4rem'} py={'2rem'} fontSize={{base:"0.9rem",md:'1.125rem'}} borderRadius={'1.125rem 0px 0px 0px'}>CAMPAIGNS <Box as={'span'} color={'#7F46F9'}>{''}(8/20)</Box></Text>

                    <Box pr={{base:0,md:'3rem'}}>
                    <CustomButton
                        text={'View all'}
                        fontSize={{ base: '0.8rem', md: '1rem' }}
                        width={{ base: '6rem', md: '7.625rem' }}
                        border={'2px solid #7F46F9'}
                        fontWeight={500}
                    />
                    </Box>
                </Flex>
                {
                    campaignData.length > 0 ? <CustomsTable
                        thstyles={{ fontWeight: 400, fontSize: '1rem' }}
                        first={{ bg: '#1E1E1E' }}
                        columnsData={campaginColumnsData}
                        tableData={campaignData.map(data => data)}
                        pagesizeCount={10}
                    /> : <CampaignNullState
                        text={'No date available'}
                        button
                        btnText={'Create campaign'}
                        icon={<FaPlus fontSize={'1rem'} />}
                    />
                }
                {/* topLocationData  */}

            </Box>
            <Flex direction={{base:'column',md:'row'}} mt={'1rem'} gap={'1.75rem'}>
                <Box 
                flex={2} 
                border={'2px solid #202020'} 
                boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
                borderRadius={'1.125rem'}
                >
                    <TopView title={'TOP PLACEMENT'}/>
                    {
                    topPlacementData.length > 0 ? <CustomsTable
                        thstyles={{ fontWeight: 400, fontSize: '1rem' }}
                        columnsData={topPlacementColumnsData}
                        tableData={topPlacementData.map(data => data)}
                        pagesizeCount={10}
                    /> : <CampaignNullState
                        text={'No date available'}
                    />
                }
                </Box>
                <Box 
                flex={1.5}
                border={'2px solid #202020'} 
                boxShadow={'0px 10px 24px rgba(0, 0, 0, 0.18)'}
                borderRadius={'1.125rem'}
                >
                <TopView title={'TOP LOCATIONS'}/>
                {
                    topLocationData.length > 0 ? <CustomsTable
                        thstyles={{ fontWeight: 400, fontSize: '1rem' }}
                        columnsData={toplocationColumnsData}
                        tableData={topLocationData.map(data => data)}
                        pagesizeCount={10}
                    /> : <CampaignNullState
                        text={'No date available'}
                    />
                }
                </Box>
            </Flex>

        </Box>
    )
}

export default ReportingHub