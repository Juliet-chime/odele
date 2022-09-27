import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const CampainActivities = ({header,title}) => {
  return (
 <Box>
<Text fontWeight={500}>
    {header}
</Text>
<Text fontWeight={400} fontSize={'0.75rem'} color={'#A3A3A3'} mt={'0.5rem'}>
    {title}
</Text>
 </Box>
  )
}

export default CampainActivities