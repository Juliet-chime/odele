import { Box, Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { RiFileCopyLine } from 'react-icons/ri'
import CreateCampaignHeader from '../createCampaign/CreateCampaignHeader'

const Title = ({ title, campaignName, infoCircle, colorText,copy,fontSize }) => {
    return (
        <>
            <Flex alignItems={'center'} gap='0.5rem'>
                <Text color={'#636363'} fontWeight={400} mb={'0.3rem'}>
                    {title}
                </Text>
                {infoCircle && <Text color='#7F46F9'><BsInfoCircle /></Text>}
                {colorText && <Text color='#7F46F9'>{colorText}</Text>}
            </Flex>
            <Flex alignItems={'center'} gap='0.5rem' cursor={'pointer'}>
<Text fontSize={fontSize||'1.5rem'} fontWeight={400} lineHeight={'1.875rem'}>{campaignName}</Text>
{copy && <Text><RiFileCopyLine color='#727272' fontSize={'1.5rem'}/></Text>}
</Flex>
        </>
    )
}

const CampaignReviewSection = (props) => {
    const { campaignName, totalBudget, dailyBudget, walletAddress, startDate, description, endDate } = props
    return (
        <Box>
            <CreateCampaignHeader title={'Campaign details'} />
            <Grid templateColumns='repeat(5, 1fr)' gap={{base:0,md:20}} mt={'2rem'}>
                <GridItem colSpan={{base:6,md:2}}>
                    <Box>
                        <Title title={'Campaign name'} campaignName={campaignName} />
                    </Box><br/>
                    <Box>
                        <Title infoCircle title={'Total budget (optional)'} campaignName={dailyBudget} />
                    </Box><br/>
                    <Box>
                        <Title fontSize={'0.875rem'} title={'Campaign description'} campaignName={description} />
                    </Box><br/>
                </GridItem>
                <GridItem colSpan={{base:6,md:2}}>
                    <Box>
                        <Title infoCircle title={'Total budget (optional)'} campaignName={totalBudget} />
                    </Box><br/>
                    <Box>
                        <Title infoCircle title={'Start date'} campaignName={startDate} />
                    </Box><br/>
                    <Box>
                        <Title infoCircle title={'End date (optional)'} campaignName={endDate} /><br/>
                        <Title fontSize={{base:'0.9rem',md:'1rem'}} copy title={'Fund source'} colorText='wallet address' campaignName={walletAddress} />
                    </Box><br/>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default CampaignReviewSection