import React from 'react'
import { Heading } from '@chakra-ui/react'

const HeaderTitle = (props) => {
    const {title, as,mt, lineHeight, fontFamily, ...rest} = props
  return (
    <Heading as={as} lineHeight={lineHeight} fontFamily={fontFamily} {...rest}>{title}</Heading>
  )
}

export default HeaderTitle