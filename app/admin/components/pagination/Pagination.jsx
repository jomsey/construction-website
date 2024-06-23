'use client'

function Pagination({ currentPage = 1, onPageClick, maxPages = 8,
  totalPages, usePageControls = true,
  onNextClick, onPreviousClick }) {
  const pages = pagination(totalPages, maxPages, currentPage)

  return (
    <div className='flex  gap-4  h-12 w-min p-2 select-none'>
      {currentPage > 1 && usePageControls &&
        <>
          {currentPage > maxPages && <span role="button" className='control text-green-500 cursor-pointer inline-flex  items-center justify-center  text-sm font-semibold border rounded px-2'>first</span>}
          <span role="button" className='py-0 px-2 cursor-pointer  text-green-500 font-semibold border inline-flex  items-center rounded justify-centerr text-sm' onClick={onPreviousClick}>Previous</span>
        </>}
      {pages.map(page => <span onClick={page !== '..' && (() => onPageClick(page))}
        className={`text-gray-700 text-sm hover:text-green-500  ${currentPage === page && 'bg-green-500 border-0 text-white hover:text-white'} w-9 cursor-pointer inline-flex  items-center justify-center rounded font-semibold border`}
        key={page}>{page}</span>)}
      {currentPage < totalPages && usePageControls && <span className='py-0 px-2 cursor-pointer font-semibold border rounded text-green-500 inline-flex text-sm items-center justify-center' onClick={onNextClick}>Next</span>}
    </div>
  )
}

function pagination(totalPages, maxPages, currentPage) {
  let pages = [];
  let startPage = 1;
  let moveStartPage = 3; //pages before the  current page

  if (currentPage >= maxPages && maxPages !== totalPages) {
    startPage = currentPage - moveStartPage
    maxPages = (currentPage + maxPages) - (moveStartPage + 1)
  }

  for (let page = startPage; page < maxPages + 1; page++)page <= totalPages && pages.push(page);
  if (totalPages > maxPages && currentPage !== totalPages) pages.push("..");

  return pages
}
export default Pagination  