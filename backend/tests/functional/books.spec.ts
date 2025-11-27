import { test } from '@japa/runner'

import Book from '#models/book'
import { ErrorResponse, PaginatedResponse } from '#types/index'
import testUtils from '@adonisjs/core/services/test_utils'
import { BookFactory } from '#database/factories/book_factory'

test.group('Books - list (GET /books)', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  test('returns 200 and paginated list of books when there are books', async ({
    client,
    expect,
  }) => {
    await BookFactory.createMany(2)

    const response = await client.get('/books')

    response.assertStatus(200)

    const { data, links, meta }: PaginatedResponse<Book> = response.body()
    // check books data
    expect(data.length).toBeGreaterThan(0)
    expect(data[0]).toMatchObject({
      bookId: expect.any(Number),
      title: expect.any(String),
      synopsis: expect.any(String),
      coverUrl: expect.any(String),
      price: expect.any(Number),
      genres: expect.any(Array),
    })
    if (data[0].authorId) expect(typeof data[0].authorId).toBe('number')

    // check links data
    if (links.prev) expect(typeof links.prev).toBe('string')
    if (links.next) expect(typeof links.next).toBe('string')

    // check meta data
    expect(meta).toMatchObject({
      currentPage: expect.any(Number),
      pageSize: expect.any(Number),
      totalPages: expect.any(Number),
      totalItems: expect.any(Number),
      hasMorePages: expect.any(Boolean),
    })
  })

  test('returns 200 and empty array when no books exist', async ({ client, expect }) => {
    const response = await client.get('/books')

    response.assertStatus(200)

    let body: PaginatedResponse<Book> = response.body()
    expect(body.data).toEqual([])
    // to make sure the rest of the properties exist
    expect(body).toMatchObject({
      links: expect.any(Object),
      meta: expect.any(Object),
    })
  })

  test('returns 200 and paginated book when requesting page_size of 1', async ({
    client,
    expect,
  }) => {
    const requestedPage = 4
    const requestedPageSize = 1
    await BookFactory.createMany(10)

    const response = await client
      .get('/books')
      .qs({ page: requestedPage, page_size: requestedPageSize })

    response.assertStatus(200)

    let { data, meta }: PaginatedResponse<Book> = response.body()
    expect(data.length).toBeGreaterThan(0)

    expect(meta).toMatchObject({
      currentPage: requestedPage,
      pageSize: requestedPageSize,
    })
  })

  test('returns 422 and error objects when bad query params are given', async ({
    client,
    expect,
  }) => {
    const requestedPage = 'wrong_page'
    const requestedPageSize = 0.25
    const response = await client
      .get('/books')
      .qs({ page: requestedPage, page_size: requestedPageSize })

    response.assertStatus(422)

    let { errors }: ErrorResponse = response.body()
    expect(errors.length).toBeGreaterThan(0)

    expect(errors[0]).toMatchObject({
      status: 422,
      code: expect.any(String),
      message: expect.any(String),
    })
  })

  test('returns 422 and errors when query params are out of bounds', async ({ client, expect }) => {
    // maybe testing these exact values here is wrong?
    const requestedPage = 1000001
    const requestedPageSize = 51
    const response = await client
      .get('/books')
      .qs({ page: requestedPage, page_size: requestedPageSize })

    response.assertStatus(422)

    let { errors }: ErrorResponse = response.body()
    expect(errors.length).toBeGreaterThan(0)
  })
})

test.group('Books - get one (GET /books/:id)', () => {
  // test happy path
  test('returns 200 and requested book data when book exists', async () => {})
  // test unhappy 404 response
})

// probably gonna be useless in the future
test.group('Books - list (GET /books/:id/genres)', () => {
  // test happy path
  test("returns 200 and list of requested book's genres when they exist", async () => {})
  test('returns 200 and empty array when no genres exist', async () => {})
})
