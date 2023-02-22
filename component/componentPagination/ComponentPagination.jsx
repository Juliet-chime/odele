
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomButton from "../button/CustomButton";

function ComponentPagination({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
  value,
  next,
  showTotalLength,
  backtoTop,
  totalText
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

  // console.log(getPaginationGroup)

  return (
    <Box overflow={'auto'} currentPage={currentPage} pages={pages}>
      <h1>{title}</h1>
      <div className="dataContainer">
        {console.log(getPaginatedData())}
        {getPaginatedData().map((d, idx) => {
          console.log({d, idx})
          return <RenderComponent key={idx} id={d.id} item={d}/>
        })}
      </div>


      <Flex direction={{base:'column-reverse',md:'row'}} alignItems='center' justifyContent={'flex-end'} gap={{base:'1rem',md:'9.188rem'}} mt='1rem'>
<Box>
    {next && <CustomButton text={'Next'} bg={'#131313'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '7.25rem' }} fontSize={{ base: '1rem', md: '0.875rem' }} fontWeight={'500'} />}</Box>

        <Flex gap='1.5rem'>
          {showTotalLength &&  <Text
            background='#404040'
            borderRadius='2.375rem'
            fontSize={{base:'0.8rem',md:'1rem'}}
            p={{base:'1rem',md:'0.8rem 1.5rem'}}
          >{data.length} {totalText}</Text>}

              {backtoTop && <CustomButton text={'Back to top'} bg={'#131313'} border={'2px solid #7F46F9'} width={{ base: "100%", md: '7.25rem' }} fontSize={{ base: '1rem', md: '0.875rem' }} fontWeight={'500'} />}

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
<Text
bg={{base:'none',md:'#404040'}}
borderRadius={{base:'none', md:'0 1.5rem 1.5rem 0rem'}}
p={{base:'none',md:'0.8rem 1rem'}}
>of {pages}</Text>
            </Flex>

          </Flex>

        </Flex>

      </Flex>
    </Box>
  );
}

export default ComponentPagination;