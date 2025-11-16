import type { HttpContext } from '@adonisjs/core/http'
import Author from '#models/author'

export default class AuthorsController {
  async show({ params }: HttpContext) {
    const author = await Author.findOrFail(params.id)
    return {
      data: author,
    }
  }

  async books({ params }: HttpContext) {
    // TODO: Consider pagination for this (some authors might have a ton of books)
    const author = await Author.query()
      .where('author_id', params.id)
      .preload('books', (booksQuery) => booksQuery.preload('genres'))
      .firstOrFail()
    return {
      data: author.books,
    }
  }
}
