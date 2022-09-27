import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import odeleIcon from "../../../public/images/pictures/odele-logo-small.svg"
import tapHere from "../../../public/images/pictures/tapHere.svg"
import odeleBg from "../../../public/images/pictures/OdeleBg.svg"

const WelcomeToOdele = () => {
  return (
    <Box
      flex={'1'}
      bg={'brand.boldText'}
      clipPath={{ base: "none", md: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      bgImage={`url(${odeleBg.src})`}
      bgRepeat={'no-repeat'}
      bgSize={'contain'}
      bgPosition={'right center'}
    >
      <Box width={{ base: "100%", md: "30rem" }} color="white" ml={{ base: "0", md: "30%" }} my={{ base: "8rem", md: "5rem" }} px={{ base: '1rem', md: '0' }}>
        <ChakraNextImage src={odeleIcon} mb="2rem" />
        <HeaderTitle title="Welcome to" fontFamily="Euclid Circular B" fontSize={'xl'} />
        <HeaderTitle title="Odele" lineHeight={"3.625rem"} fontWeight={'800'} fontSize={'xxl'} />
        <Text maxW="25rem" my="1.125rem">
          No 1 NFT promotion platform, providing NFT owners
          and creators digital real estate across content partners (publishers)
        </Text>
        <Link href="/creator">
          <Box mt="3.567rem">
            <ChakraNextImage src={tapHere} />
          </Box>
        </Link>
      </Box>
    </Box>
  )
}

export default WelcomeToOdele