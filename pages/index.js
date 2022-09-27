import HomePage from 'component/views/home/Home'
import MetaTitle from 'component/metaTitle/MetaTitle'
import { Box, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <MetaTitle title="Home"/>
      <HomePage/>
    </div>
  )
}


