import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Button, Flex, List, Text } from '@chakra-ui/react'
import createCampaign from "../../../public/images/icons/createCampaign.svg"
import { useAppContext } from 'context'
import React, { useState } from 'react'
import Steps from './steps/Steps'
import CustomButton from '@/component/button/CustomButton'
import CreateCampaignDrawer from './CreateCampaignDrawer'
import CampaignDetails from './createCampaignContent/campaignDetails/CampaignDetails'
import Device from './device/Device'
import Keywords from './keywords/Keywords'
import Dermographics from './demographics/Demographics'
import NFTs from './nfts/NFTs'
import Blocking from './blocking/Blocking'
import Placement from './placement/Placement'
import { createCampaignMenu } from '@/component/data'
import Link from 'next/link'
import CreateCampaignDashboard from './createCampaignDashboard'

const CreateCampaign = () => {

    const { currentStep, SetCurrentStep } = useAppContext()
    const [showCreateCampaign, setShowCreateCampaign] = useState(false)

    const { isactive, screenSize } = useAppContext()

    const next = () => {
        SetCurrentStep(prev => prev + 1)
    }

    const previous = () => {
        SetCurrentStep(prev => prev - 1)
    }

    const Arr = [
        {
            name: 'Campagin Details',
            content: <CampaignDetails next={next} />
        },
        {
            name: 'NFTs',
            content: <NFTs next={next} previous={previous} />
        },
        {
            name: 'Demographics',
            content: <Dermographics next={next} previous={previous} />
        },
        {
            name: 'Devices',
            content: <Device next={next} previous={previous} />
        },
        {
            name: 'Blocking',
            content: <Blocking next={next} previous={previous} />
        },
        {
            name: 'Keywords',
            content: <Keywords previous={previous} next={next} />
        },
        {
            name: 'Placements',
            content: <Placement previous={previous} />
        }
    ]

    return (
        <Box color='white' position={'relative'}>

             {showCreateCampaign &&
                <Box bg='black' position={'fixed'} w={'60%'} top={0} left={0} h={'100vh'} zIndex={9}>
                    <CreateCampaignDashboard item={Arr} currentStep={currentStep}/>
                    {/* <CreateCampaignDrawer item={Arr} currentStep={currentStep} /> */}
                </Box>
            }

            <CreateCampaignDashboard Arr={Arr} currentStep={currentStep}>
                <Box w={"full"} px={{ base: '1rem', md: '1.875rem' }}>
                    {Arr[currentStep].content}</Box>
            </CreateCampaignDashboard>

            <Box position={'absolute'} right={2} top={'-1rem'} display={{ base: "block", md: "none" }} onClick={() => setShowCreateCampaign(!showCreateCampaign)}>
                <ChakraNextImage src={createCampaign} width={25} />
            </Box>
        </Box>
    )
}

export default CreateCampaign