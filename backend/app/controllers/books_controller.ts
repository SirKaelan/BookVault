import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'

export default class BooksController {
  async index() {
    // TODO: Consider pagination for this
    const books = await Book.query().preload('genres')
    return {
      data: books,
    }
  }

  async show({ params }: HttpContext) {
    const book = await Book.query().where('book_id', params.id).preload('genres').firstOrFail()
    return {
      data: book,
    }
  }

  async genres({ params }: HttpContext) {
    const book = await Book.query().where('book_id', params.id).preload('genres').firstOrFail()
    return {
      data: book.genres,
    }
  }
}
