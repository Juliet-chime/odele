import React, { useState, useEffect } from "react";
//import styles from "./styles.module.css";

const PaginationComponent = ({ pageChangeHandler, totalRows, rowsPerPage,pagesArr,noOfPages }) => {

    
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

    // Calculating max number of pages
  //const noOfPages = Math.ceil(totalRows / rowsPerPage);

  // Creating an array with length equal to no.of pages

  //const pagesArr = [...new Array(noOfPages)];
  //console.log(pagesArr)

  // State variable to hold the current page. This value is
  // passed to the callback provided by the parent
  const [currentPage, setCurrentPage] = useState(1);

   // Navigation arrows enable/disable state
   const [canGoBack, setCanGoBack] = useState(false);
   const [canGoNext, setCanGoNext] = useState(true);

  // Onclick handlers for the butons
  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onPrevPage = () => setCurrentPage(currentPage - 1);
  const onPageSelect = (pageNo) => setCurrentPage(pageNo);

  console.log(pagesArr)
  // Disable previous and next buttons in the first and last page
  // respectively
  useEffect(() => {
    if (noOfPages === currentPage) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (currentPage === 1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [noOfPages, currentPage]);

    // To set the starting index of the page
    useEffect(() => {
        //const skipFactor = (currentPage - 1) * rowsPerPage;
        // Some APIs require skip for paginaiton. If needed use that instead
        // pageChangeHandler(skipFactor);
        pageChangeHandler(currentPage);
      }, [currentPage]);

  return (
       
    <>
      {noOfPages > 1 ? (
        <div 
        //className={styles.pagination}
        >
          <div 
          //className={styles.pagebuttons}
          >
            <button
              //className={styles.pageBtn}
              onClick={onPrevPage}
              disabled={!canGoBack}
            >
              &#8249;
            </button>
            <button onClick={prev}>prev</button>
            {pagesArr.map((num, index) => (
             <>
              <button
                onClick={() => onPageSelect(index + 1)}
                style={{color:index + 1 === currentPage ? 'red' : 'blue' }}
              >
                {index + 1}
              </button>
             </>
            ))}
            <button onClick={next}>next</button>
            <button
              //className={styles.pageBtn}
              onClick={onNextPage}
              disabled={!canGoNext}
            >
              &#8250;
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PaginationComponent;