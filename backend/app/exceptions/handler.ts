import app from '@adonisjs/core/services/app'
import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import { errors as coreErrors } from '@adonisjs/core'
import { errors as lucidErrors } from '@adonisjs/lucid'
import { errors as vineErrors } from '@vinejs/vine'
import { ErrorResponse, ErrorResponseObject, ValidationErrorObject } from '#types/index'
import { capitalizeFirstLetter } from '#helpers/capitalize_first_letter'

export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: unknown, ctx: HttpContext) {
    if (error instanceof vineErrors.E_VALIDATION_ERROR) {
      const validationErrors = error.messages as ValidationErrorObject[]
      const body: ErrorResponse = {
        errors: validationErrors.map(
          (err): ErrorResponseObject => ({
            status: 422,
            code: 'VALIDATION_ERROR',
            message: err.message,
            meta: {
              field: err.field,
              rule: err.rule,
            },
          })
        ),
      }
      return ctx.response.status(422).json(body)
    }

    if (error instanceof coreErrors.E_ROUTE_NOT_FOUND) {
      const body: ErrorResponse = {
        errors: [
          {
            status: 404,
            code: 'ROUTE_NOT_FOUND',
            message: 'The requested endpoint does not exist',
            meta: {
              path: ctx.request.url(),
              method: ctx.request.method(),
            },
          },
        ],
      }
      return ctx.response.status(404).json(body)
    }

    if (error instanceof lucidErrors.E_ROW_NOT_FOUND) {
      const body: ErrorResponse = {
        errors: [
          {
            status: 404,
            code: `${error.model?.name?.toUpperCase() || 'RESOURCE'}_NOT_FOUND`,
            message: `${error.model ? capitalizeFirstLetter(error.model.name) : 'Resource'} not found`,
            ...(ctx.params.id && { meta: { id: ctx.params.id } }),
          },
        ],
      }
      return ctx.response.status(404).json(body)
    }

    // handles the rest of the exceptions
    return super.handle(error, ctx)
  }

  /**
   * The method is used to report error to the logging service or
   * the third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
