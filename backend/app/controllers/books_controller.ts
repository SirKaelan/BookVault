import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import { ErrorResponse } from '#types/responses'

export default class BooksController {
  async index() {
    // TODO: Consider pagination for this
    const books = await Book.query().preload('genres')
    return {
      data: books,
    }
  }

  async show({ params, response }: HttpContext) {
    const book = await Book.query().where('book_id', params.id).preload('genres').first()
    if (!book) {
      const body: ErrorResponse = {
        errors: [
          {
            status: 404,
            code: 'BOOK_NOT_FOUND',
            message: 'Book not found',
            meta: { id: params.id },
          },
        ],
      }
      return response.status(404).send(body)
    }

    return {
      data: book,
    }
  }

  async genres({ params, response }: HttpContext) {
    const book = await Book.query().where('book_id', params.id).preload('genres').first()
    if (!book) {
      const body: ErrorResponse = {
        errors: [
          {
            status: 404,
            code: 'BOOK_NOT_FOUND',
            message: 'Book not found',
            meta: { id: params.id },
          },
        ],
      }
      return response.status(404).send(body)
    }

    return {
      data: book.genres,
    }
  }
}
