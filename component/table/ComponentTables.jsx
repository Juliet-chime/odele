import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import Loader from "../loader/Loader";
import CustomizedPagination from "../pagination/CustomizedPagination";

const ComponentTables = ({
    columnsData,
    tableData,
    tablePageSize,
    tableTotalCount,
    onPageChange,
    currentPage,
    loading,
    noPaginate,
    borderbottom,
    first,
    last,
    theadStyles,
    thstyles,
    thtrstyles,
    trstyles,
    tdstyles,
    tbodystyles,
    ...props
}) => {
    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);

    const tableInstance = useTable(
        {
            columns,
            data: data ?? [],
            initialState: { pageIndex: currentPage, pageSize: tablePageSize },
            manualPagination: true,
            pageCount: Math?.ceil(tableTotalCount / tablePageSize),
        },
        usePagination
    );

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
        tableInstance;

    return (
        <>
            {loading ? <Loader /> :
                <>
                    < TableContainer overflow='auto'>
                        <Table {...getTableProps()} variant={'unstyled'} bg={'#131313'} {...props}>
                            <Thead color={'#A3A3A3'} {...theadStyles}>
                                {headerGroups.map((headerGroup) => (
                                    <>
                                        <Tr {...headerGroup.getHeaderGroupProps()} borderBottom={borderbottom || '1.5px solid #2C2A2A'} {...thtrstyles}>
                                            {headerGroup.headers.map((column) => (
                                                <><Th {...column.getHeaderProps()} textTransform={'capitalize'} _first={first} {...thstyles}>{column.render("Header")}</Th></>
                                            ))}
                                        </Tr>
                                    </>
                                ))}
                            </Thead>
                            {(data && data.length === 0) || !data ? <Tbody>

                                <Tr>
                                    <Td>No Content To Display</Td>
                                </Tr>
                            </Tbody> :
                                <Tbody {...getTableBodyProps()} {...tbodystyles}>
                                    {page.map((row, i) => {
                                        prepareRow(row);
                                        return (
                                            <>
                                                <Tr {...row.getRowProps()} borderBottom={borderbottom || '1.5px solid #2C2A2A'} {...trstyles}>
                                                    {row.cells.map((cell) => {
                                                        return <><Td {...cell.getCellProps()} {...tdstyles} _first={first} _last={last}>{cell.render("Cell")}</Td></>;
                                                    })}
                                                </Tr>
                                            </>
                                        );
                                    })}
                                </Tbody>
                            }
                        </Table>
                    </TableContainer>

                    {noPaginate ? null : (
                        <>
                            {!tableTotalCount ||
                                !currentPage ||
                                tableData.length < 1 ? null : (
                                <CustomizedPagination
                                    totalCount={tableTotalCount}
                                    currentPage={currentPage}
                                    pageSize={tablePageSize}
                                    onPageChange={onPageChange}
                                />
                            )}
                        </>
                    )}
                </>
            }
        </>

    );
};

export default ComponentTables;
