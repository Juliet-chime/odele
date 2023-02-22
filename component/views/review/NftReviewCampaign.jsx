import ComponentPagination from '@/component/componentPagination/ComponentPagination'
import { nftCollection } from '@/component/data'
import { Box } from '@chakra-ui/react'
import React from 'react'
import CreateCampaignHeader from '../createCampaign/CreateCampaignHeader'
import SelectedCampaignCard from '../createCampaign/selectedCampaign/SelectedCampaignCard'

const NftReviewCampaign = () => {
  return (
    <Box>
    <CreateCampaignHeader title={'NFTs'} HeaderNftType='Single’(s)' />
    <ComponentPagination
  data={nftCollection}
  RenderComponent={SelectedCampaignCard}
  pageLimit={10}
  dataLimit={5}
  totalText={'NFTs in total'}
//   backtoTop
  showTotalLength
/>
    </Box>
  )
}

export default NftReviewCampaign