export type ErrorResponse = {
  errors: {
    status: number
    code: string
    message: string
    meta?: Record<string, number | string>
  }[]
}
