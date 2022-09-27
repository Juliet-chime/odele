import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import scrapingsuccess from "../../../../public/images/pictures/syncsuccessful.png"

const ScrapingSuccessful = () => {
    return (
        <Box textAlign={'center'}>
            <ChakraNextImage src={scrapingsuccess} />
            <HeaderTitle title="NFT wallet syncing
            Successful"
                lineHeight={"3.625rem"}
                fontWeight={'800'}
                fontSize={'lg'} />
            <Text maxW={'20rem'} pt={'1.25rem'} m={'auto'} fontWeight={400}>
                Curabitur vitae venenatis lectus. Quisque eu vestibulum nisi. Integer id ipsum
            </Text>
            <Text mt={'1.438rem'} color={'brand.grayText'}>38 NFTs Synced</Text>
        </Box>
    )
}

export default ScrapingSuccessful