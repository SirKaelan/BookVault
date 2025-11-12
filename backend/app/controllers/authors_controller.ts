import type { HttpContext } from '@adonisjs/core/http'
import Author from '#models/author'
import type { ErrorResponse } from '#types/responses'

export default class AuthorsController {
  async show({ params, response }: HttpContext) {
    const author = await Author.find(params.id)
    if (!author) {
      const body: ErrorResponse = {
        errors: [
          {
            status: 404,
            code: 'AUTHOR_NOT_FOUND',
            message: 'Author not found',
            meta: { id: params.id },
          },
        ],
      }
      return response.status(404).send(body)
    }

    return {
      data: author.serialize(),
    }
  }

  async books({ params, response }: HttpContext) {
    response.send(`All books of a single author with id of ${params.id} endpoint!`)
  }
}
