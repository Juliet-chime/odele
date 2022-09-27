import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const TopView = ({title}) => {
  return (
    <Box bg={'#202020'} p={'1rem'}>
    <Text fontSize={'1.125rem'} fontWeight={500}>{title}</Text>
</Box>
  )
}

export default TopView