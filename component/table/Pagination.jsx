import { Box, Flex, IconButton, List, Text, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'
import CustomButton from '../button/CustomButton'

const Pagination = ({
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageOptions,
    pageCount,
    state, 
    prev,
    next,
    startIndex,
    endIndex 
}) => {

const {pageIndex} = state
const [activeIndex,setActiveIndex] = useState(0)

const onHandleChangePage = () => {
    next()
    gotoPage(endIndex)
}

const onHandlePreviousPage = () => {
    prev()
    gotoPage(startIndex)
}

const goToNextPage = (item,index) => {
    gotoPage(item)
    setActiveIndex(index)
}


    return (
        <Flex m='auto' mt='2rem' alignItems={'center'} width={{base:'100%',md:'40%'}} direction={{base:'column',md:'row'}} gap='1rem' fontSize={'1rem'}>

            <Flex  alignItems={'center'} gap='0.5rem'>
           <Tooltip label="First Page">
            <IconButton
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              icon={<BsChevronDoubleLeft />}
              mr={4}
            />
          </Tooltip>

  <CustomButton 
  text={'Prev'} 
  onClick={onHandlePreviousPage} 
  disabled={startIndex === 0}
  fontSize={'1rem'}
  />
  <List display={'flex'} gap={'1rem'}>
  {pageOptions.slice(startIndex, endIndex).map((item,index)=>
  <>
  <Box as='li' 
  cursor={'pointer'}
  width='1.5rem'
  height={'1.5rem'} 
  fontSize={'0.825rem'}
//   border={activeIndex=== index ? 'solid orange':null} 
  display='flex'
  alignItems={'center'}
  justifyContent={'center'}
  background={activeIndex=== index ? '#727272':null}
  borderRadius= {activeIndex=== index ? 'full':null} 
  active={activeIndex} onClick={()=>goToNextPage(item,index)}>
    {item + 1}
    </Box>
  </>
  )}
  </List>
  </Flex>

  <Flex  alignItems={'center'} gap='0.5rem'>
  <CustomButton 
  text={'Next'} 
  onClick={onHandleChangePage} 
  disabled={endIndex === pageOptions.length}
  fontSize={'1rem'}
  />

  <Tooltip label="Last Page">
            <IconButton
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              icon={<BsChevronDoubleRight />}
              ml={4}
            />
          </Tooltip>
  <Text fontSize={'1rem'}>
  Page {''}{pageIndex + 1} of {pageOptions.length}
  </Text>
  </Flex>

</Flex>
    )
}

export default Pagination