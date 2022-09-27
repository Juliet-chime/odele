import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import odeleLogo from "../../../public/images/icons/odeleLogo.svg"
import publisher from "../../../public/images/pictures/publisher.png"
import promoter from "../../../public/images/pictures/promoter.png"
import CreatorCard from './CreatorCard'
import Link from 'next/link'

const Creator = () => {
    return (
        <Flex direction={"column"} padding={0}>
            <Box bg="white" px={{ base: "1rem", md: "15rem" }} pt={'5.125rem'} h={"50vh"}>
                <Link href={'/'}>
                    <a>
                    <ChakraNextImage src={odeleLogo} />
                    </a>
                </Link>
                <HeaderTitle title="Let’s get you started" fontFamily="Euclid Circular B" fontSize={{ base: "2rem", md: 'lg' }} />
                <HeaderTitle title="Continue as" fontWeight={'800'} fontSize={{ base: 'xl', md: 'xl' }} />
            </Box>
            <Box bg="brand.bgpurple" h={{ base: "auto", md: "50vh" }} px={{ base: "1rem", md: "15rem" }} py={{ base: '1rem', md: '0' }} position={'relative'}>
                <Flex position={{ base: 'relative', md: 'absolute' }} gap={'1.75rem'} bottom={{ base: '0', md: '5.5rem' }} direction={{ base: "column", md: "row" }}>
                    <CreatorCard link="publisher" img={publisher} heading="Publisher" text="Vestibulum scelerisque tincidunt tortor. Nullam et pharetra odio,
                     quis suscipit mi. Donec auctor, metus sed fringilla tempus, libero
                     orci consectetur diam, eget pretium velit diam in turpis. Morbi
                     quam nisl"/>
                    <CreatorCard link="syncWallet" img={promoter} heading="Promoter" text="Vestibulum scelerisque tincidunt tortor. Nullam et pharetra odio,
                     quis suscipit mi. Donec auctor, metus sed fringilla tempus, libero
                     orci consectetur diam, eget pretium velit diam in turpis. Morbi
                     quam nisl"/>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Creator