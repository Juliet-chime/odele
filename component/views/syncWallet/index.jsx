import CustomButton from '@/component/button/CustomButton'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import CustomModal from '@/component/customModal/CustomModal'
import ScrapingFailed from '@/component/customModal/Modals/scrapingNFT/ScrapinFailed'
import ScrapingNFT from '@/component/customModal/Modals/scrapingNFT/ScrapingNFT'
import ScrapingSuccessful from '@/component/customModal/Modals/scrapingNFT/ScrapingSuccessful'
import { nftWallet } from '@/component/data'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Button, Flex, ListItem, Text, UnorderedList, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import odeleBg from "../../../public/images/pictures/OdeleBg.svg"


const PromoterSyncWallet = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showMore, setShowMore] = useState(false)
    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <CustomModal
                modalBody={<ScrapingFailed />}
                buttonModal={<Box w={'17.125rem'} mt={'2rem'}><CustomButton text='Cancel' color={'brand.text'} onClick={onClose} /></Box>}
                isopen={isOpen}
                onclose={onClose}
                footerDirection={'column'}
            />
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                bg={'brand.bgdark'}
                h={'100vh'}
                bgImage={`url(${odeleBg.src})`}
                bgRepeat={'no-repeat'}
                bgSize={'contain'}
                bgPosition={'right center'}
            >
                <Box
                    w={'31.25rem'}
                    h={'33rem'} 
                    overflowY={'scroll'}
                    bg={'brand.boldText'}
                    borderRadius={'1.5rem'}
                    p={'2.5rem'}
                    color={'white'}
                    margin={{ base: "1rem", md: 0 }}
                >
                    <HeaderTitle title="Sync Odele with your" fontFamily="Euclid Circular B" fontSize={'md'} />
                    <HeaderTitle title="NFT wallet" lineHeight={"3.625rem"} fontWeight={'800'} fontSize={'lg'} />
                    <Text my="1.125rem" fontWeight={300}>
                        pull all NFTs in the current wallet, select to continue
                    </Text>
                    <Box mt={'2.375rem'}>
                        <UnorderedList margin={0}>

                            {showMore ? nftWallet.map((item) => (
                                <ListItem mb={'1.75rem'} cursor={'pointer'} px={'1rem'} borderRadius={'1.5rem'} listStyleType={'none'} key={item.name} color={'white'} bg={'brand.bgdark'} border={'1.5px solid #3C3C3C'} boxShadow={'0px 14px 42px rgba(0, 0, 0, 0.12)'}>
                                    <Flex alignItems={'center'} gap={'0.625rem'} py={'0.2rem'}>
                                        <ChakraNextImage src={item.image} />
                                        <HeaderTitle title={item.name} lineHeight={"3.625rem"} fontWeight={'700'} fontSize={'sm'} />
                                    </Flex>

                                </ListItem>
                            )) : nftWallet.slice(0, 3).map((item) => (
                                <ListItem mb={'1.75rem'} cursor={'pointer'} px={'1rem'} borderRadius={'1.5rem'} listStyleType={'none'} key={item.name} color={'white'} bg={'brand.bgdark'} border={'1.5px solid #3C3C3C'} boxShadow={'0px 14px 42px rgba(0, 0, 0, 0.12)'}>
                                    <Flex alignItems={'center'} gap={'0.625rem'}>
                                        <ChakraNextImage src={item.image} />
                                        <HeaderTitle title={item.name} lineHeight={"3.625rem"} fontWeight={'700'} fontSize={'sm'} />
                                    </Flex>

                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                    <Box onClick={() => setShowMore(!showMore)} textAlign={'center'} fontWeight={600} cursor={'pointer'}>{showMore ? 'More options' : 'Less options'}</Box>
                </Box>
            </Box>
        </>
    )
}

export default PromoterSyncWallet