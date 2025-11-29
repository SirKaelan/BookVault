import type { HttpContext } from '@adonisjs/core/http'
import Author from '#models/author'
import { idValidator } from '#validators/id'
import { paginationValidator } from '#validators/pagination'
import { DEFAULT_PAGE_SIZE, DEFAULT_START_PAGE } from '#config/pagination'
import Book from '#models/book'
import { PaginatedResponse } from '#types/index'

export default class AuthorsController {
  // authors/:id
  async show({ request }: HttpContext) {
    const { params } = await request.validateUsing(idValidator)
    const author = await Author.findOrFail(params.id)
    return {
      data: author,
    }
  }

  // authors/:id/books
  async books({ request }: HttpContext): Promise<PaginatedResponse<Book>> {
    const { params } = await request.validateUsing(idValidator)
    const { page, page_size: pageSize } = await request.validateUsing(paginationValidator)

    const safePage = page ?? DEFAULT_START_PAGE
    const safePageSize = pageSize ?? DEFAULT_PAGE_SIZE

    // We try to fetch author so that if it fails we show 404
    const author = await Author.findOrFail(params.id)

    const paginator = await author
      .related('books')
      .query()
      .preload('genres')
      .orderBy('book_id', 'desc')
      .paginate(safePage, safePageSize)

    return {
      data: paginator.all(),
      links: {
        prev: paginator.getPreviousPageUrl(),
        next: paginator.getNextPageUrl(),
      },
      meta: {
        currentPage: paginator.currentPage,
        pageSize: paginator.perPage,
        totalPages: paginator.lastPage,
        totalItems: paginator.total,
        hasMorePages: paginator.hasMorePages,
      },
    }
  }
}
