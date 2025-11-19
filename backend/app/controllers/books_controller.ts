import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import { PaginatedResponse } from '#types/index'
import { DEFAULT_PAGE_SIZE, DEFAULT_START_PAGE } from '#config/pagination'
import { paginationValidator } from '#validators/pagination'

export default class BooksController {
  async index({ request }: HttpContext): Promise<PaginatedResponse<Book>> {
    const { page, page_size: pageSize, search } = await request.validateUsing(paginationValidator)

    // Set defaults if nothing was provided
    const safePage = page ?? DEFAULT_START_PAGE
    const safePageSize = pageSize ?? DEFAULT_PAGE_SIZE

    const bookQuery = Book.query()

    // Fuzzy find logic (search via 'book title' and 'author name', if both match, they both show)
    if (search) {
      const term = `%${search}%`
      bookQuery.whereRaw('LOWER(title) LIKE ?', [term]).orWhereHas('author', (authorQuery) => {
        authorQuery
          .whereRaw('LOWER(first_name) LIKE ?', [term])
          .orWhereRaw('LOWER(last_name) LIKE ?', [term])
      })
    }

    const paginator = await bookQuery
      .orderBy('book_id', 'desc')
      .preload('genres')
      .paginate(safePage, safePageSize)

    return {
      data: paginator.all(),
      links: {
        prev: paginator.getPreviousPageUrl(),
        next: paginator.getNextPageUrl(),
      },
      meta: {
        current_page: paginator.currentPage,
        page_size: paginator.perPage,
        total_pages: paginator.lastPage,
        total_items: paginator.total,
        has_more_pages: paginator.hasMorePages,
      },
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
