import MetaTitle from '@/component/metaTitle/MetaTitle'
import NftForm from '@/component/views/createCampaign/nfts/NftForm'
import SelectedCampaign from '@/component/views/createCampaign/selectedCampaign/SelectedCampaign'
import { Box } from '@chakra-ui/react'
import { useAppContext } from 'context'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const SelectedCampaigns = () => {

  const {currentStep, SetCurrentStep} = useAppContext()
  const router = useRouter()


  const next = () => {

    SetCurrentStep(2)
    router.push('/createcampaign')
  }

  return (
   <Box>
   <MetaTitle title="Selected campaign"/>
   <SelectedCampaign next={next}/>
   </Box>
  )
}

export default SelectedCampaigns