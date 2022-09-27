import Head from 'next/head'
import React from 'react'

const MetaTitle = ({title, content}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={"Your home for NFT creating and publishing" || content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default MetaTitle