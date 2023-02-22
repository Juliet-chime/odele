import { createCampaignMenu } from '@/component/data'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, List, Text } from '@chakra-ui/react'
import { useAppContext } from 'context'
import Link from 'next/link'
import React, { useState } from 'react'
import Blocking from './blocking/Blocking'
import CampaignDetails from './createCampaignContent/campaignDetails/CampaignDetails'
import Dermographics from './demographics/Demographics'
import Device from './device/Device'
import Keywords from './keywords/Keywords'
import NFTs from './nfts/NFTs'
import Placement from './placement/Placement'
import Steps from './steps/Steps'

const CreateCampaignDashboard = ({ children }) => {

  const { isactive, screenSize, currentStep, SetCurrentStep } = useAppContext()

  const [activeId, setActiveId] = useState(0)

  const Arr = [
    {
      name: 'Campagin Details',
    },
    {
      name: 'NFTs',
    },
    {
      name: 'Demographics',
    },
    {
      name: 'Devices',
    },
    {
      name: 'Blocking',
    },
    {
      name: 'Keywords',
    },
    {
      name: 'Placements',
    }
  ]

  const onTabClick = (index) => {
    console.log(activeId)
    setActiveId(index)
  }
  return (
    <>
     <Flex gap={{base:'1rem',ms:0}} p='1.5rem'>
     {isactive && screenSize > 900 ? <Flex flex={1} width={{base:0,md:'22rem'}} direction={'column'}>
     <HeaderTitle title="Create Campaign" maxWidth='27rem' fontWeight={'800'} fontSize={{ base: 'lg', md: 'xl' }} lineHeight={'2.785rem'} mb={{base:'1rem',md:'2rem'}} />
      <Box bg='#0B0B0B' p='1.875rem' borderRadius='1.5rem'>
      <Box >
            <List>
              {createCampaignMenu.map((item, index) => {
                if (index === 0) return (
                  <>
                    <Box as='li'>
                      <Link href={item.link}>
                        <Steps item={Arr} currentStep={currentStep} />
                      </Link>
                    </Box>
                  </>
                )
              })}
            </List>
          </Box>

          <Box>
            <Text fontWeight={600} color='#A3A3A3'>Review & Start Promotion</Text>
            <List mt={'1rem'}>
              {createCampaignMenu.map((item, index) => {
                if (index > 0) return (
                  <>
                    <Box as='li'
                    border= '0.125rem solid #131313'
                    borderRadius= '1rem'
                    mb={'0.5rem'}
                    p={'0.7rem'}
                    >
                      <Link href={item.link}>
                        <Flex>{item.title}</Flex>
                      </Link>
                    </Box>
                  </>
                )
              })}
            </List>
          </Box>
      </Box>
         
        </Flex> : null}
        <Flex flex={3} mt={{base:0,md:'10.688rem'}}>
          {children}
        </Flex>

      </Flex>
    </>

  )
}

export default CreateCampaignDashboard