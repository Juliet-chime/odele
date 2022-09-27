import CustomButton from '@/component/button/CustomButton';
import { socialIcons } from '@/component/data';
import HeaderTitle from '@/component/Heading/Heading';
import { Flex, Link } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {

    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} direction={{ base: "column", md: "row" }} my={{ base: '1.5rem', md: '2.5rem' }} gap={{ base: "0.5rem", md: 0 }}>
            <Flex gap={{ base: '1rem', md: '2rem' }} alignItems={'center'}>
                <HeaderTitle title="Social" lineHeight={"3.625rem"} fontWeight={'800'} fontSize={{ base: 'xs', md: 'sm' }} />
                {socialIcons.map((item, index) => (<Link key={index} href={item.link} fontSize={{ base: "", md: '1.25rem' }} _hover={{
                    fontSize: '1rem',
                }}>
                    {item.icon}
                </Link>))}
            </Flex>

            <Flex width={{ base: '', md: '25rem' }} gap={{ base: '0.5rem', md: '1rem' }}>
                <Link to='/support' _hover={{
                    textDecoration: 'none',
                }}>
                    <CustomButton text={'Contact Support'} bg={'#202020'} border={'2px solid #7F46F9'} width={{ base: "10rem", md: '14rem' }} fontSize={'1rem'} fontWeight={'600'} />
                </Link>
                <Link to='/faqs' _hover={{
                    textDecoration: 'none',
                }}>
                    <CustomButton text={'FAQS'} width={{ base: '6rem', md: '8.625rem' }} bg={'#202020'} border={'2px solid #7F46F9'} fontSize={'1rem'} fontWeight={'600'} />
                </Link>
            </Flex>

        </Flex>
    )
}

export default Footer