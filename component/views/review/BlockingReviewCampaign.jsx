import FormRadio from '@/component/form/FormRadio'
import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import CreateCampaignHeader from '../createCampaign/CreateCampaignHeader'

const BlockingReviewCampaign = () => {

    const radioOption = ['Facebook','Discord']

    const [isChecked, setIsChecked] = useState(true)

  return (
    <Box>
  <CreateCampaignHeader title={'Blocking'} />

<Flex
border='2px solid #202020'
boxShadow='0px 10px 24px rgba(0, 0, 0, 0.18)'
borderRadius='1.125rem'
p='2.25rem'
mt="1rem"
>
   <FormRadio
   radioOption={radioOption}
   showText label={isChecked ? 'Blocked': 'Block'} 
   isChecked={isChecked} 
   onChange={()=>setIsChecked(!isChecked)}
   size={'sm'}
   radioStyle={{
    border: '2px solid #202020',
    borderRadius: '1.5rem',
    padding:'0.3rem 1.2rem',
    marginRight:'1rem'
    }}
    flexWrapper={{
      gap:'0.5rem',
    }}
    />
</Flex>
    </Box>
  )
}

export default BlockingReviewCampaign