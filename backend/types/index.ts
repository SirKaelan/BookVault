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
    current_page: number
    page_size: number
    total_pages: number
    total_items: number
    has_more_pages: boolean
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
