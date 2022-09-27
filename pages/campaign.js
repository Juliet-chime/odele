import MetaTitle from '@/component/metaTitle/MetaTitle'
import CustomsTable from '@/component/table/Table'
import React, { useEffect, useState } from 'react'
import { columnsData } from '@/component/table/columns'
import tableData from '../component/table/MOCK_DATA.json'
import { Box, Text } from '@chakra-ui/react'
import TableComponent from '@/component/table/TableComponent'
import PaginationComponent from '@/component/table/PaginationComponent'
import ComponentTables from '@/component/table/ComponentTables'

const Wallet = () => {

  const [pageData, setPageData] = useState({
    rowData: [],
    isLoading: false,
    totalPages: 0,
    totalPassengers: 0,
  });

  console.log(pageData.row,'hjklkjh')
  console.log(pageData)

  const [currentPage, setCurrentPage] = useState(1);

   const columns = [
    {
      Header: "Passenger name",
      accessor: "name",
    },
    {
      Header: "Total trips",
      accessor: "trips",
    },
    {
      Header: "Current flight",
      accessor: "flightName",
    },
  ];
  
  const formatRowData = (rawData) =>
    rawData.map((info) => ({
      name: info.name,
      trips: info.trips,
      flightName: info.airline?.name,
    }));
  
 const getData = async (pageNo = 1) => {
    const response = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${pageNo}&size=15`
    );
    return await response.json();
  };

  useEffect(() => {
    setPageData((prevState) => ({
      ...prevState,
      rowData: [],
      isLoading: true,
    }));
    getData(currentPage).then((info) => {
      console.log(info)
      const { totalPages, totalPassengers, data } = info;
      setPageData({
        isLoading: false,
        rowData: formatRowData(data),
        totalPages,
        totalPassengers: 150,
      });
    });
  }, [currentPage]);
  //console.log(pageData.totalPassengers,'sdfg')

  return (
    <>
    <MetaTitle title="Campaign"/>
    {/* <p>Total Passengers: {pageData.totalPassengers || "Loading..."}</p> */}
    <Box color={'white'}>

{/* 
      <ComponentTables
       loading={pageData.isLoading}
      columnsData={columns}
      tableData={pageData.rowData}
      tablePageSize={15}
      tableTotalCount={pageData.rowData.length}
      currentPage={currentPage}
      onPageChange={page => setCurrentPage(page)}
      /> */}



    {/* <TableComponent
          columns={columns}
          data={pageData.rowData}
          isLoading={pageData.isLoading}
          totalRows={pageData.totalPassengers}
          pageChangeHandler={setCurrentPage}
          rowsPerPage={15}
        /> */}

{/* <PaginationComponent
        totalRows={pageData.totalPassengers}
        pageChangeHandler={setCurrentPage}
        rowsPerPage={15}
      /> */}
    </Box>
    </>
  )
}

export default Wallet