import MetaTitle from '@/component/metaTitle/MetaTitle'
import Creator from '@/component/views/creator/Creator'
import React from 'react'

const CreateOdele = () => {
  return (
    <>
    <MetaTitle title="Create odele"/>
    <Creator/>
    </>
  )
}

export default CreateOdele

// CreateOdele.getLayout = page => (
//   <>
//     {page}
//   </>
// )