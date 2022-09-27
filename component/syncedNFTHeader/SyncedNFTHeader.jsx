import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import CustomButton from '../button/CustomButton'
import HeaderTitle from '../Heading/Heading'

const SyncedNFTHeader = ({ header, button, btnText, text, fontSize, ...rest }) => {
  return (
    <Flex direction={{ base: button ? 'column' : 'row', md: 'row' }} gap={{ base: button ? '1rem' : 'none', md: '0' }} justifyContent='space-between' alignItems={'center'}>
      <HeaderTitle title={header} fontWeight={'700'} fontSize={{ base: 'md', md: 'lg' }} />
      <Flex gap={'3rem'} alignItems={'center'}>
        {button && <CustomButton text={btnText} {...rest} />}
        <Text color={'#A3A3A3'} fontWeight={500} fontSize={fontSize}>{text}</Text>
      </Flex>
    </Flex>
  )
}

export default SyncedNFTHeader