import FormSwitch from '@/component/form/FormSwitch'
import HeaderTitle from '@/component/Heading/Heading'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CampainActivities from '../CampainActivities'

const SyncedNotification = () => {

    const [ischecked,setIsChecked] = useState(false)

    const onHandleChange = (e) => {
        setIsChecked(e.target.checked)
console.log(e)
    }

  return (
 <>
  <HeaderTitle title="Notifications" fontWeight={'700'} fontSize='2rem' color={'white'} />
  <Text fontWeight={300} mt={'1rem'}>
  Select notifications you would like to receive
    </Text>
    <Box 
    w={{base:'100%',md:'29.375rem'}} 
    h={'40.563rem'}
    mt={'1.25rem'}
    p={'1.25rem'}
    boxShadow={' 0px 10px 24px rgba(0, 0, 0, 0.18)'}
    border={'2px solid #202020'}
    borderRadius={'1.125rem'}
    >
  <HeaderTitle title="Campaigns Activities" fontWeight={'400'} fontSize='1.25rem' color={'#727272'} />
  <Flex py={'1.3rem'} borderBottom={'2px solid #202020'} justifyContent={'space-between'} alignItems={'center'}>
    <CampainActivities header={'Created Campaigns'}title={'Get notified once a new campaign has been created'} />
   <FormSwitch isChecked={ischecked} bg={'#727272'} isCheckedColor={'#202020'} onChange={onHandleChange}/>
  </Flex>
  <Flex py={'1.3rem'} borderBottom={'2px solid #202020'} justifyContent={'space-between'} alignItems={'center'}>
    <CampainActivities header={'exchange'}title={'Get notified once a new campaign has been created'} />
   <FormSwitch isChecked={ischecked} bg={'#727272'} isCheckedColor={'#202020'} onChange={onHandleChange}/>
  </Flex>
  <Flex py={'1.3rem'} borderBottom={'2px solid #202020'} justifyContent={'space-between'} alignItems={'center'}>
    <CampainActivities header={'exchange'}title={'Get notified once a new campaign has been created'} />
   <FormSwitch bg={'#727272'} isCheckedColor={'#202020'} />
  </Flex>
  <Flex py={'1.3rem'} borderBottom={'2px solid #202020'} justifyContent={'space-between'} alignItems={'center'}>
    <CampainActivities header={'exchange'}title={'Get notified once a new campaign has been created'} />
   <FormSwitch bg={'#727272'} isCheckedColor={'#202020'} />
  </Flex>
  <Flex py={'1.3rem'} borderBottom={'2px solid #202020'} justifyContent={'space-between'} alignItems={'center'}>
    <CampainActivities header={'exchange'}title={'Get notified once a new campaign has been created'} />
   <FormSwitch bg={'#727272'} isCheckedColor={'#202020'}/>
  </Flex>
    </Box>
 </>
  )
}

export default SyncedNotification