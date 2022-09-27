import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import bg404 from "../../../public/images/pictures/bg404.png"
import error404 from "../../../public/images/pictures/404.png"
import odeleLogo from "../../../public/images/icons/odeleLogo.svg"
import HeaderTitle from '@/component/Heading/Heading'
import Link from 'next/link'
import Footer from '@/component/footer/Footer'

const Error404Page = () => {

  return (
    <Box
      bgImage={`url(${bg404.src})`}
      h={'100vh'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      color={'white'}
      px={{ base: '1rem', md: '5.25rem' }}
      py={{base:'1rem',md:'3rem'}}
      bgPosition={'center'}
    >
      <Flex direction={'column'} alignItems={'flex-end'}>
        <Box w={'4.5rem'} h={'4.5rem'} mb={{base:'1rem',md:'2rem'}} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'1rem'} bg={'white'}>
          <ChakraNextImage src={odeleLogo} display={'flex'} alignItems={'center'} justifyContent={'center'} />
        </Box>
        <HeaderTitle title="Odele" fontWeight={'800'} fontSize={{ base: 'xl', md: 'xxl' }} />
        <HeaderTitle title="v1.0" fontWeight={'800'} fontSize={{ base: 'xl', md: 'lg' }} />
      </Flex>


      <Flex mt={{base:'1.5rem',md:'0'}}>
        <Box>
          <ChakraNextImage src={error404} />
          <Text fontSize={'1.5rem'} mt={'1.5rem'} fontWeight={600}>Oops! Page not found</Text>
          <Text maxW={'45rem'} mt={'1.5rem'}>Aenean feugiat erat ac imperdiet ultrices. Nulla posuere finibus turpis et aliquam. Pellentesque
            neque nisl, iaculis eget sollicitudin et, mollis cursus ligula. Donec placerat pellentesque ante in ornare.</Text>
        </Box>
      </Flex>

      <Flex justifyContent={'flex-end'} mt={{base:'1.5rem',md:0}}>
        <Link href="/">
          <a>
            <Flex bg={'white'} h={'4rem'} borderRadius={'0.75rem'} px={'0.75rem'} alignItems={'center'} gap={'1rem'}>
              <Text color={'#131313'} fontWeight={400}>Tap to home</Text>
              <Box w={'2.5rem'} h={'2.8rem'} mb={'2rem'} mt={'1.5rem'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'0.5rem'} border={'1px solid #7F46F9'}>
                <ChakraNextImage src={odeleLogo} display={'flex'} alignItems={'center'} justifyContent={'center'} width={25} />
              </Box>
            </Flex>
          </a>
        </Link>
      </Flex>
      <Footer/>
    </Box>
  )
}

export default Error404Page
