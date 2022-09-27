
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import Loader from "../loader/Loader";
import PaginationComponent from "./PaginationComponent";
//import styles from "./styles.module.css";

const TableComponent = ({ columns, data, isLoading, manualPagination = false,totalRows,pageChangeHandler,rowsPerPage }) => {

    const noOfPages = Math.ceil(totalRows / rowsPerPage);

    console.log(noOfPages,totalRows,'wowsss',rowsPerPage)
    const pagesArr = [...new Array(noOfPages)];

  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => data, [data]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columnData,
    data: rowData,
    manualPagination
  });
  return (
    <>
    {isLoading ? <Loader/> : <>
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <>
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
            <><Th {...column.getHeaderProps()}>{column.render("Header")}</Th></>
            ))}
          </Tr>
          </>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
           <>
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <><Td {...cell.getCellProps()}>{cell.render("Cell")}</Td></>;
              })}
            </Tr>
           </>
          );
        })}
      </Tbody>
    </Table>
    <PaginationComponent
        totalRows={totalRows}
        pageChangeHandler={pageChangeHandler}
        rowsPerPage={rowsPerPage}
        noOfPages={noOfPages}
        pagesArr={pagesArr}
      />
    </> }
    </>
  );
};

export default TableComponent