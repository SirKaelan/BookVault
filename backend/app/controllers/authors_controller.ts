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
      data: author,
    }
  }

  async books({ params, response }: HttpContext) {
    // TODO: Consider pagination for this (some authors might have a ton of books)
    const author = await Author.query()
      .where('author_id', params.id)
      .preload('books', (booksQuery) => booksQuery.preload('genres'))
      .first()
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
      data: author.books,
    }
  }
}
