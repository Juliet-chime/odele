import { Box, Flex} from '@chakra-ui/react'
import { useAppContext } from 'context'
import React, { useState } from 'react'
import SettingSidebar from './settingsSidebar'
import settings from "../../../public/images/icons/settings.svg"
import ChakraNextImage from '@/component/chakraNextImage/ChakaraNextImage'
import SettingsDrawer from './settingsSidebar/SettingsDrawer'
import SettingProfile from './settingContent/SettingProfile'
import SyncedNFT from './settingContent/SyncedNFT'
import SyncedNotification from './settingContent/SyncedNotification'

const SettingPage = () => {
    const {isactive ,screenSize} = useAppContext()

    const onShowSetting = () => {
        setShowSettings(!showSettings)
    }

    const [activeIndex , setActiveIndex] = useState(1)
    const [showSettings , setShowSettings] = useState(false)
   
    const labelArray = [
        {
          name: "Profile",
          content: (<SettingProfile/>)
        },
        {
          name: "Synced NFTs",
          content: (<SyncedNFT/>)
        },
        {
          name: "Notifications",
          content:(<SyncedNotification/>)
        },
        
      ]

  return (
    <Box position={'relative'}>
    {showSettings && 
    
    <Box color={'white'} bg={'black'} position={'fixed'} w={'60%'} top={0} h={'100vh'} zIndex={9}>
        <SettingsDrawer setShowSettings={setShowSettings} item={labelArray} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
        </Box>
        }
      <Flex>
       {isactive && screenSize > 900 ? <SettingSidebar item={labelArray} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/> : null}
        <Box w={'full'} color={'white'} ml={{base:0,md:'20rem'}}>
            <Box display={{base:'block',md:'none'}} position={'absolute'} top={'-0.5rem'} right={'0.5rem'} cursor={'pointer'} onClick={onShowSetting}>
                <ChakraNextImage src={settings} width={20} height={18}/>
            </Box>
            <Box pt={{ base: '2rem', md: '5rem' }} pb={'1rem'} px={{ base: '1rem', md: '4rem' }}>
            {labelArray[activeIndex - 1].content}
            </Box>
        </Box>
      </Flex>
      </Box>
  )
}

export default SettingPage