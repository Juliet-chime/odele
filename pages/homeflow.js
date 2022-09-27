import DashboardLayout from '@/component/dashboardLayout'
import React from 'react'
import { useAppContext } from 'context'
import { Box } from '@chakra-ui/react'
import CustomTable from '@/component/table/CustomTable'
import ReportingHub from '@/component/views/homeFlow/ReportingHub'
import MetaTitle from '@/component/metaTitle/MetaTitle'

const homeflow = () => {

  return (
    <Box>
       <MetaTitle title="Reporting Hub"/>
      <ReportingHub/>
  {/* <CustomTable pagesizeCount={10}/> */}
    </Box>
  )
}

export default homeflow