import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import CreateCampaignHeader from '../createCampaign/CreateCampaignHeader'

const KeywordsCampaignReview = ({listCountries}) => {
    return (
        <Box>
            <CreateCampaignHeader title={'Keywords'} />

            <Box
                border='2px solid #202020'
                box-shadow='0px 10px 24px rgba(0, 0, 0, 0.18)'
                border-radius='1.125rem'
                p='1.5rem'
            >
                <Flex gap='1.5rem' flexWrap={'wrap'} mt='1.5rem' pb={'1rem'}>
                    {listCountries.length > 0 ? listCountries.map((countries, index) => (
                        <Flex
                            key={countries.name}
                            cursor={'pointer'}
                            alignItems={'center'}
                            gap={'0.813rem'}
                            px={'1rem'}
                            py={'0.5rem'}
                            border='2px solid #353535'
                            borderRadius={'1.5rem'}>
                            <Text>{countries}</Text>
                            <FaTimes color='#FF2828' onClick={() => deleteItem(countries.name)} />
                        </Flex>
                    )) : null}
                </Flex>
            </Box>
        </Box>
    )
}

export default KeywordsCampaignReview