// Error response
export type ErrorResponseObject = {
  status: number
  code: string
  message: string
  meta?: Record<string, number | string>
}

export type ErrorResponse = {
  errors: ErrorResponseObject[]
}

// Pagianted response
export type PaginatedResponse<T> = {
  data: T[]
  links: {
    prev: string | null
    next: string | null
  }
  meta: {
    // probably not a good idea to have this as camel case, but w/e
    currentPage: number
    pageSize: number
    totalPages: number
    totalItems: number
    hasMorePages: boolean
  }
}

// Validation error object
export type ValidationErrorObject = {
  message: string
  field: string
  rule: string
  index?: number
  meta?: Record<string, any>
}
