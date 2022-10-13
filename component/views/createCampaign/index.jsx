import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Button, Flex } from '@chakra-ui/react'
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

const CreateCampaign = () => {

    const [currentStep, SetCurrentStep] = useState(0)
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
            content: <CampaignDetails next={next}/>
        },
        {
            name: 'NFTs',
            content: <NFTs next={next} previous={previous}/>
        },
        {
            name: 'Demographics',
             content: <Dermographics next={next} previous={previous}/>
        },
        {
            name: 'Devices',
            content:<Device next={next} previous={previous}/> 
        },
        {
            name: 'Blocking',
            content: <Blocking next={next} previous={previous}/>
        },
        {
            name: 'Keywords',
            content: <Keywords previous={previous} next={next}/>
        },
        {
            name: 'Placements',
            content: <Placement previous={previous}/>
        }
    ]

    return (
        <Box color='white' py={"3.938rem"} px={{ base: '1rem', md: '1.5rem' }} position={'relative'}>

            {showCreateCampaign &&
                <Box bg='black' position={'fixed'} w={'60%'} top={0} left={0} h={'100vh'} zIndex={9}>
                    <CreateCampaignDrawer item={Arr} currentStep={currentStep} />
                </Box>
            }
            <Box position={'absolute'} right={2} top={'-1rem'} display={{ base: "block", md: "none" }} onClick={() => setShowCreateCampaign(!showCreateCampaign)}>
                <ChakraNextImage src={createCampaign} width={25} />
            </Box>
            <HeaderTitle title="Create Campaign" maxWidth='27rem' fontWeight={'800'} fontSize={{ base: 'lg', md: 'xxl' }} lineHeight={'2.785rem'} mb={{base:'1rem',md:'2rem'}} />
            <Flex position={'relative'}>

                {isactive && screenSize > 900 ? <Box h={'100vh'} w={'20rem'} bg='#0B0B0B' borderRadius='1.5rem' px={'1.5rem'}>
                    <Steps item={Arr} currentStep={currentStep} />
                </Box> : null}


                <Box w={"full"} px={{base:'1rem',md:'1.875rem'}}>
                    {Arr[currentStep].content}
                    {/* <Button onClick={previous}>previous</Button>
                    <Button onClick={next}>next</Button> */}
                </Box>
            </Flex>
        </Box>
    )
}

export default CreateCampaign