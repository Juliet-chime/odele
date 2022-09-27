import MetaTitle from '@/component/metaTitle/MetaTitle'
import Error404Page from '@/component/views/error404'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Error404 = () => {
  return (
    <>
    <MetaTitle title="404 error"/>
    <Error404Page/>
    </>
  )
}

export default Error404