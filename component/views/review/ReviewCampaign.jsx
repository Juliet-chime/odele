import { Box } from '@chakra-ui/react'
import React from 'react'
import CreateCampaignDashboard from '../createCampaign/createCampaignDashboard'
import BlockingReviewCampaign from './BlockingReviewCampaign'
import CampaignReviewSection from './CampaignReviewSection'
import DemographyCampaignReview from './DemographyCampaignReview'
import DeviceCampaignReview from './DeviceCampaignReview'
import KeywordsCampaignReview from './KeywordsCampaignReview'
import NftReviewCampaign from './NftReviewCampaign'
import PlacementReviewCampaign from './PlacementReviewCampaign'

const ReviewCampaign = () => {

    const country = ['United States','Canada','United Kingdom','China']
  return (
   <CreateCampaignDashboard item currentStep>
    <Box px={"1rem"}>
<CampaignReviewSection 
campaignName='Chimp promotion #01' 
totalBudget='USD $1,000' 
dailyBudget='USD $80'
startDate='Aug 12 - 12:45 AM'
description='Donec accumsan ante eros, sit amet commodo
eros iaculis eu. Mauris id erat a justo pellente sque vulputate. Praesent condimentum lectus nec sapien ulputate, id hendrerit ligula.'
endDate='Sep 23 - 1:45 PM'
walletAddress='0xd6b9df3326009549302392910194002020'
/><br/>
<NftReviewCampaign/> <br/>
<DemographyCampaignReview listCountries={country}/> <br/>
<DeviceCampaignReview/> <br/>
<BlockingReviewCampaign/><br/>
<KeywordsCampaignReview listCountries={country}/> <br/>
<PlacementReviewCampaign/>
    </Box>
   </CreateCampaignDashboard>
  )
}

export default ReviewCampaign