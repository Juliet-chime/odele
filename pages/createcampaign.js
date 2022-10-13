import Loader from '@/component/loader/Loader'
import MetaTitle from '@/component/metaTitle/MetaTitle'
import CreateCampaign from '@/component/views/createCampaign'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Campaign = () => {
  return (
    <>
    <MetaTitle title="Create campaign"/>
    <Box color='red'>
    <CreateCampaign/>
    </Box>
    {/* <Loader/> */}
    </>
  )
}

export default Campaign