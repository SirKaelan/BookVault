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
  const nextPage: number | null =
    startIndex + safePageSize < mockData.length ? safePage + 1 : null;

  return {
    mockData: mockDataPortion,
    currentPage: safePage,
    previousPage: prevPage,
    nextPage,
    totalPages,
    totalItems: mockData.length,
  };
};
