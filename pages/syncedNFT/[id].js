import CustomButton from '@/component/button/CustomButton'
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import { syncedNFT } from '@/component/data'
import HeaderTitle from '@/component/Heading/Heading'
import NFTData from '@/component/views/syncedNFT/syncedNFTDetails/NFTData'
import NFTDetails from '@/component/views/syncedNFT/syncedNFTDetails/NFTDetails'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useAppContext } from 'context'
import { useRouter } from 'next/router'
import React from 'react'
import ethereum from '../../public/images/pictures/ethereum-logo.png'

const SyncedNFTDetails = () => {
    const { activeIndex } = useAppContext()

    const router = useRouter()


    const post = syncedNFT[activeIndex - 1].content.find(item => item.id === Number(router.query.id))
    console.log(post)

    return (
       <Box py={'4.75rem'} px={{base:'1rem',md:'5.5rem'}}>
        <NFTData post={post}/>
        <NFTDetails/>
       </Box>
    )
}

export default SyncedNFTDetails