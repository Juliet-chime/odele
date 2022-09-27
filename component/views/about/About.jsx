import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import aboutodele from "../../../public/images/pictures/aboutodele.png"
import odeleLogo from "../../../public/images/icons/odeleLogoblackbg.png"
import search from "../../../public/images/icons/search-icon.png"
import HeaderTitle from '@/component/Heading/Heading'
import { BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'
import Footer from '@/component/footer/Footer'

const About = () => {
  return (
   <Box position={'relative'}>
    <Flex direction={{base:'column',md:'row'}} justifyContent={'space-between'} >
        
        <Flex position={'relative'} top={{base:'0',md:'-3.5rem'}} gap={'1.875rem'} alignItems={'center'}>
            <Box>
                <ChakraNextImage src={odeleLogo}/>
            </Box>
            <Link href={'#'}>
            <a>
            <Flex p={'0.5rem'} alignItems={'center'} bg={'#131313'} borderRadius={'1.5rem'}>
            <ChakraNextImage src={search} w={{base:3,md:'auto'}}/>
            <HeaderTitle title="Learn more" fontWeight={'700'} fontSize={{base:'0.5rem',md:'1.125rem'}} color={'white'} m={'1rem'} />
            <BsChevronRight color='white'/>
            </Flex>
            </a>
            </Link>
        </Flex>
        
        <ChakraNextImage src={aboutodele}/>
    </Flex>

    <Flex position={'relative'} top={{base:'0',md:'-5.5rem'}} direction={'column'}>
    <HeaderTitle title="About" fontWeight={'700'} fontSize='1.5rem' color={'white'} />
    <HeaderTitle
    title={
    <Box>
        Odele Promoter 
        <Box 
        as={'span'} 
        fontSize={'3rem'} 
        fontWeight={'500'} 
        color={'#7F46F9'}>
           &nbsp; v1.0
            </Box>
            </Box>
            } 
    fontWeight={'800'}
     fontSize={{base:'2.2rem',md:'3rem'}} maxW={'32rem'} color={'white'} />
    </Flex>
    <Text fontWeight={300} mt={{base:'auto',md:'-3rem'}}>
    Aenean feugiat erat ac imperdiet ultrices. Nulla posuere finibus turpis et aliquam. Pellentesque neque nisl, iaculis eget sollicitudin et, mollis cursus ligula. Donec placerat pellentesque ante in ornare. Duis ultrices blandit sapien et placerat. Pellentesque sed tristique metus, sed suscipit augue. Sed at tellus dui. Etiam tempor ut ipsum nec volutpat. Aliquam consectetur risus at dui tempus consequat. Quisque euismod odio a odio fermentum hendrerit.
    </Text>
    <Footer/>
   </Box>
  )
}

export default About