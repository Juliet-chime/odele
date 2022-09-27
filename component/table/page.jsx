import React from 'react'

const Page = (props) => {
    const { currentPage, maxPageLimit, minPageLimit,totalPage,tableData} = props;
  const totalPages = totalPage-1;
  const data = tableData;

  const pages = [];
  for(let i=1 ; i<=totalPage; i++){
      pages.push(i);
  }
  return (
    <div>P</div>
  )
}

export default Page