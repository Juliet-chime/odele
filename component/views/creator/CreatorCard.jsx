import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import arrow from "../../../public/images/icons/creator_arrow.png"

const CreatorCard = ({ link, img, heading, text, border }) => {
    return (
        <Link href={`/${link}`}>
            <a>
                <Box w={{ base: '100%', md: '31rem' }} bg="#FFFFFF" boxShadow={'0px 14px 42px rgba(0, 0, 0, 0.08)'} borderRadius={'1.5rem'} border={border}>
                    <ChakraNextImage src={img} />
                    <Box px={"1.813rem"} pb={'2.063rem'}>
                        <Flex justifyContent={'space-between'} pt={'1rem'}>
                            <HeaderTitle title={heading} lineHeight={"2.375rem"} fontWeight={'700'} fontSize={'lg'} />
                            <ChakraNextImage src={arrow} />
                        </Flex>
                        <Text pt={'1rem'} fontSize={'0.875rem'} color={'brand.text'}>{text}</Text>
                    </Box>
                </Box>
            </a>
        </Link>
    )
}

export default CreatorCard