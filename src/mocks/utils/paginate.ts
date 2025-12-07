const MAX_PAGE_SIZE = 20;
const MIN_PAGE_SIZE = 1;
const MAX_PAGE = 100000;

export const paginateMock = <T>(
  mockData: T[],
  page: number,
  pageSize: number
) => {
  // safety caps
  let safePage = page;
  if (page > MAX_PAGE) safePage = MAX_PAGE;
  else if (page < 1) safePage = 1;

  let safePageSize = pageSize;
  if (pageSize > MAX_PAGE_SIZE) safePageSize = MAX_PAGE_SIZE;
  else if (pageSize < 1) safePageSize = MIN_PAGE_SIZE;

  // calculate indices for array slicing
  const startIndex = (safePage - 1) * safePageSize;
  const endIndex = startIndex + safePageSize;

  const mockDataPortion = mockData.slice(startIndex, endIndex);

  // calculate pagination metadata
  const prevPage: number | null = safePage > 1 ? safePage - 1 : null;
  const totalPages = Math.ceil(mockData.length / safePageSize);

  let nextPage: number | null = null;
  // check if content size is the same as requested size
  // this kind of page might be the last
  if (mockDataPortion.length === safePageSize) {
    // check the data one page ahead
    const nextStartIndex = startIndex + safePageSize;
    const nextEndIndex = endIndex + safePageSize;

    const nextMockDataPortion = mockData.slice(nextStartIndex, nextEndIndex);

    if (nextMockDataPortion.length !== 0) nextPage = safePage + 1;
  }

  return {
    mockData: mockDataPortion,
    currentPage: safePage,
    previousPage: prevPage,
    nextPage,
    totalPages,
    totalItems: mockData.length,
  };
};
