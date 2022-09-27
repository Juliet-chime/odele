import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import scrapingfailed from "../../../../public/images/pictures/syncFailed.png"

const ScrapingFailed = () => {
    return (
        <Box textAlign={'center'}>
            <ChakraNextImage src={scrapingfailed} />
            <HeaderTitle
                title="NFT walletsyncing failed"
                lineHeight={"3.625rem"}
                fontWeight={'800'}
                fontSize={'lg'} />
            <Text maxW={'20rem'} pt={'1.25rem'} m={'auto'} fontWeight={400}>
                Curabitur vitae venenatis lectus. Quisque eu vestibulum nisi. Integer id ipsum
            </Text>
        </Box>
    )
}

export default ScrapingFailed