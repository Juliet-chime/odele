import React, { useMemo, useState } from 'react'
// import tableData from "./MOCK_DATA.json"
// import { columnsData } from './columns'
import { usePagination, useTable } from 'react-table'
//import useTable from 'react-table'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import Loader from '../loader/Loader'
import Pagination from './Pagination'

//  console.log(columnsData,'jjj')

const CustomsTable = ({loading,columnsData,tableData,pagesizeCount,borderbottom,first,last,theadStyles,thstyles,thtrstyles,trstyles,tdstyles,tbodystyles,...props}) => {

    const columns = useMemo( () => columnsData,  [columnsData])
    const data = useMemo( () => tableData,  [tableData])

    const [startIndex,setStartIndex] = useState(0)

    const [endIndex,setEndIndex] = useState(5)


    const prev = () => {
      setStartIndex(prevState => prevState - 5)
      setEndIndex(prevState => prevState - 5)
    }
  
    const next = () => {
      setStartIndex(prevState => prevState + 5)
      setEndIndex(prevState => prevState  + 5)
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        pageCount,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        previousPage,
        prepareRow,
      } = useTable({ columns, data,initialState:{pageIndex:0,pageSize:pagesizeCount} },usePagination)


  return (
   <>
   {loading ? (<Loader/>) : (< TableContainer overflow='auto'>
   <Table {...getTableProps()} variant={'unstyled'} bg={'#131313'} {...props}>
        <Thead color={'#A3A3A3'} {...theadStyles}>
            { headerGroups?.map(headerGroup => (
                <>
                <Tr borderBottom={borderbottom ||'1.5px solid #2C2A2A'} {...headerGroup.getHeaderGroupProps()} {...thtrstyles}>
                     {
           headerGroup?.headers?.map(column => (
            <>
            <Th textTransform={'capitalize'} {...column.getHeaderProps()}  _first={first} {...thstyles}>
              {column.render('Header')}
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
                <Td {...cell.getCellProps()} {...tdstyles}  _first={first}  _last={last}>
                  {cell.render('Cell')}
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
    {tableData.length <= pagesizeCount ? null: <Pagination
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
    />}
    
    </TableContainer>)}
   </>
  )
}

export default CustomsTable