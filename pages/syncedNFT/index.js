import MetaTitle from '@/component/metaTitle/MetaTitle'
import SyncedNFTPage from '@/component/views/syncedNFT/syncedNFTPage'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
  return (
   <>
    <MetaTitle title="SyncedNFT"/>
    <SyncedNFTPage/>
    </>
  )
}

export default Profile