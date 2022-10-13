



// const ComponenetPagination = (props) => {

//     const { currentPage, maxPageLimit, minPageLimit} = props;
//     const totalPages = props.response.totalPages-1;
//     const data = props.response.data;

//     return(
//         <div>
//         </div>
//     )
// }

// export default ComponenetPagination





/* eslint-disable react/no-array-index-key */
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomButton from "../button/CustomButton";
// import PostItemProps from "./postItemType";
// import { PaginationStyle, Btn, BtnWrapper } from "./style";

function ComponentPagination({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
}) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  console.log(pages, 'pagess')

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    console.log(start)
    return new Array(pageLimit)
      .fill(pageLimit)
      .map((_, idx) => start + idx + 1);
  };

  console.log(getPaginationGroup)

  return (
    <Box overflow={'auto'} currentPage={currentPage} pages={pages}>
      <h1>{title}</h1>
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} id={d.id} item={d} />
        ))}
      </div>
      <Flex direction={{base:'column-reverse',md:'row'}} justifyContent={'flex-end'} gap={{base:'1rem',md:'9.188rem'}} className="pagination">
        <CustomButton text={'Next'} bg={'#131313'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '7.25rem' }} fontSize={{ base: '1rem', md: '0.875rem' }} fontWeight={'500'} />
        <Flex gap='1.5rem'>
          <Text
            background='#202020'
            borderRadius='2.375rem'
            fontSize={{base:'0.8rem',md:'1rem'}}
            p={{base:'1rem',md:'0.8rem 1.5rem'}}
          >{data.length} in total</Text>

          <Flex
            background='##0B0B0B'
            border='2px solid #404040'
            borderRadius='1.5rem'
            alignItems={'center'}
            gap='0.3rem'
            pl='0.5rem'
            px={{base:'0.5rem',md:0}}
          >
            <Flex alignItems={'center'} gap='0.2rem'>
 <CustomButton text={<FaChevronLeft/>} cursor='pointer' bg={'none'} border={'none'} width={{ base: 0, md: 'none' }} fontSize={{ base: '0.6rem', md: '0.875rem' }} fontWeight={'500'} onClick={goToPreviousPage} disabled={currentPage === 1} />
<Text>{currentPage <= 9 ? '0' + currentPage : currentPage}</Text>
<CustomButton text={<FaChevronRight/>} cursor='pointer' bg={'none'} border={'none'} width={{ base: 0, md: 'none' }} fontSize={{ base: '0.6rem', md: '0.875rem' }} fontWeight={'500'} onClick={goToNextPage} disabled={currentPage === pages} />
            </Flex>

            <Box
              bg={{base:'none',md:'#202020'}}
              borderRadius={{base:'none', md:'0 1.5rem 1.5rem 0'}}
              p={{base:'none',md:'0.8rem 1rem'}}>{pages} Pages</Box>
          </Flex>

          {/* <CustomButton text={
  <Flex>
    <Flex alignItems={'center'}>
    <FaChevronLeft />
    {currentPage}
    <FaChevronRight />
    </Flex>
    <Box>{pages} Pages</Box>
  </Flex>
} bg={'#131313'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '7.25rem' }} fontSize={{base:'0.5rem',md:'0.875rem'}} fontWeight={'500'} /> */}

        </Flex>


        {/* previous button */}
        {/* <button type="button" onClick={goToPreviousPage} className="prev">
          <FaChevronLeft />
        </button> */}


        {/* show page numbers */}
        {/* <Box>
          {getPaginationGroup().map((item, index) => (
            <Text
              type="button"
              key={index}
              onClick={changePage}
              item={item}
              currentPage={currentPage}
            >
              <span>{item}</span>
            </Text>
          ))}
        </Box> */}

        {/* next button */}
        {/* <button type="button" onClick={goToNextPage} className="next">
          <FaChevronRight />
        </button> */}
      </Flex>
    </Box>
  );
}

export default ComponentPagination;