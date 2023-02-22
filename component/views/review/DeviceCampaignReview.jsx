import FormCheckInput from '@/component/form/FormCheckInput'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import CreateCampaignHeader from '../createCampaign/CreateCampaignHeader'

const DeviceCampaignReview = () => {

    const options =['iOS','Android','Other mobile','Desktop / Pc']

  return (
  <Box>
    <CreateCampaignHeader title={'Devices'}/>
<Flex direction={'column'}>
<FormCheckInput options={options} isCheckedColor='#7F46F9' />
</Flex>
  </Box>
  )
}

export default DeviceCampaignReview