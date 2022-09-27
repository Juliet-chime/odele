import React, { useMemo, useState } from 'react'
import tableData from "./MOCK_DATA.json"
import { columnsData } from './columns'
import { useTable,useSortBy,usePagination } from 'react-table'
//import useTable from 'react-table'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    useTableStyles,
  } from '@chakra-ui/react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import Loader from '../loader/Loader'
import Pagination from './Pagination'

const CustomTable = ({loading,pagesizeCount,borderbottom,first,theadStyles,thstyles,thtrstyles,trstyles,tdstyles,tbodystyles,...props}) => {

    const columns = useMemo( () => columnsData,  [])
    const data = useMemo( () => tableData,  [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        totalCount,
        siblingCount,
        setPageSize,
        state,
        previousPage,
        prepareRow,
      } = useTable({ columns, data,initialState:{pageIndex:0,pageSize:pagesizeCount} },useSortBy,usePagination)

const { pageIndex, pageSize } = state
console.log(pageIndex,'innn',pageOptions,'opti',pageSize,'size')
console.log(totalCount,siblingCount,)

const [startIndex,setStartIndex] = useState(0)

const [endIndex,setEndIndex] = useState(5)

const ff = pageOptions.slice(startIndex, endIndex).map(item=>
  item
  )

  console.log(ff)

  const prev = () => {
    setStartIndex(prevState => prevState - 5)
    setEndIndex(prevState => prevState - 5)
  }

  const next = () => {
    setStartIndex(prevState => prevState + 5)
    console.log(startIndex)
    setEndIndex(prevState => prevState  + 5)
    console.log(endIndex)
  }

  return (
    <>
  {loading ? (<Loader/>) : ( < TableContainer border={'solid orange'} overflow='auto'>
    <Table variant={'unstyled'} {...getTableProps()} bg={'#131313'} boxShadow='0px 10px 24px rgba(0, 0, 0, 0.18)' border='2px solid #202020' {...props}>
        <Thead color={'#A3A3A3'} {...theadStyles}>
            { headerGroups?.map(headerGroup => (
                <>
                <Tr borderBottom={borderbottom ||'1.5px solid #2C2A2A'} {...headerGroup.getHeaderGroupProps()} {...thtrstyles}>
                     {
           headerGroup?.headers?.map(column => (
            <>
            <Th {...column.getHeaderProps(column.getSortByToggleProps())}  _first={first} {...thstyles}>
              {column.render('Header')}
              {column.isSorted ? (column.isSortedDesc ? <FaCaretUp/>:<FaCaretDown/>):''}
            </Th>
            </>
          ))}
                </Tr>
                </>
            ))}
            
        </Thead>
        <Tbody {...getTableBodyProps()} {...tbodystyles}>
             {
       page?.map(row => {
        prepareRow(row)
        return (
          <>
          <Tr borderBottom={borderbottom ||'1.5px solid #2C2A2A'} {...row.getRowProps()} {...trstyles}>
            {
            row?.cells?.map(cell => {
              return (
                <>
                <Td {...cell.getCellProps()} {...tdstyles}  _first={first}>
                  {
                  cell.render('Cell')}
                </Td>
                </>
              )
            })}
          </Tr>
          </>
        )
      })}
        </Tbody>
    </Table>
    <Pagination
     canNextPage={canNextPage}
     canPreviousPage={canPreviousPage}
     next={next}
     prev={prev}
     gotoPage={gotoPage}
     state={state}
     pageOptions={pageOptions}
     startIndex={startIndex}
     endIndex={endIndex}
     pageCount={pageCount}
    />
    </TableContainer>
    )}
    </>
  )
}

export default CustomTable