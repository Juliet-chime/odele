import CustomButton from '@/component/button/CustomButton'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import FormInput from '@/component/form/FormInput'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import good from '../../../../public/images/icons/good.png'

const NftForm = ({ dataValue, onFieldchange }) => {
    return (
        <form>
            <Box mt={'2.5rem'}>
                <Flex alignItems={'center'} gap='0.5rem' mb={'0.5rem'}>
                    <Text>NFT Price</Text>
                    <Text color='#7F46F9'><BsInfoCircle /></Text>
                </Flex>
                <Flex
                    alignItems={'center'}
                    border='1px solid #353535'
                    w={{ base: '100%', md: '30%' }}
                    borderRadius={'2.375rem'}
                    p={'0.2rem'}>
                    <Box
                        w={'5.438rem'}
                        h={'3.5rem'}
                        bg='#202020'
                        display={'flex'}
                        alignItems='center'
                        justifyContent={'center'}
                        borderRadius='29px 0px 0px 29px'
                        color='#727272'
                        fontSize={'1.2rem'}>ETH</Box>

                    <FormInput
                        type={'number'}
                        value={dataValue.price}
                        name='price'
                        onChange={onFieldchange}
                        // label={
                        //     <Flex alignItems={'center'} gap='0.5rem'>
                        //         <Text>NFT Price</Text>
                        //         <Text color='#7F46F9'><BsInfoCircle /></Text>
                        //     </Flex>
                        // }
                        placeholder={'Enter your daily budget'}
                        placeholderStyle={{ pl: { base: '3.8rem', md: '5rem' } }}
                        labelProps={{ color: '#636363', fontSize: '1rem' }}
                        fontSize={'1rem'}
                        // p={'0.5rem'}
                        border='none'
                    />
                </Flex>

                <Flex>
                   <Box>
                   <FormInput
                        label={'CTA'}
                        name={'cta'}
                        value={dataValue.cta}
                        onChange={onFieldchange}
                        placeholder={'Enter call to action'}
                        labelProps={{ color: '#636363', fontSize: '1rem' }}
                        p={'2rem'}
                        border='1px solid #353535'
                        bg={'#0B0B0B'}
                    />
                   </Box>

                    <Box flex={1} position={'relative'}>
                    <FormInput
                        label={'Destination URL'}
                        name={'cta'}
                        value={dataValue.url}
                        onChange={onFieldchange}
                        placeholder={'http:opensea.io/092kj-Token209RE..'}
                        labelProps={{ color: '#636363', fontSize: '1rem' }}
                        p={'2rem'}
                        border='1px solid #353535'
                        bg={'#0B0B0B'}
                    />
                   <Flex position={'absolute'} right={0} top={8} alignItems={'center'} gap={'0.5rem'}>
                   <ChakraNextImage src={good}/>
                    <CustomButton text={'Reset default'} border='2px solid #727272' w={'8.563rem'} fontSize={'1rem'}/>
                   </Flex>
                    </Box>
                </Flex>
            </Box>
        </form>
    )
}

export default NftForm