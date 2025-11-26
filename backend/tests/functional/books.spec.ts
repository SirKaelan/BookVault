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

    let { data } = response.body() as PaginatedResponse<Book>
    expect(data).toBeInstanceOf(Array)
    expect(data.length).toBeGreaterThan(0)
  })

  test('returns 200 and empty array when no books exist', async ({ client, expect }) => {
    const response = await client.get('/books')

    response.assertStatus(200)

    let { data } = response.body() as PaginatedResponse<Book>
    expect(data).toBeInstanceOf(Array)
    expect(data.length).toBe(0)
  })

  test('returns 200 and paginated book when requesting page_size of 1', async ({
    client,
    expect,
  }) => {
    await BookFactory.createMany(3)

    const response = await client.get('/books').qs({ page: 1, page_size: 1 })

    response.assertStatus(200)

    let { data } = response.body() as PaginatedResponse<Book>
    expect(data.length).toBe(1)
  })

  test('returns 422 and error objects when bad query params are given', async ({
    client,
    expect,
  }) => {
    const response = await client.get('/books').qs({ page: 'wrong value', page_size: 0.25 })

    response.assertStatus(422)

    let { errors } = response.body() as ErrorResponse
    expect(errors).toBeInstanceOf(Array)
    expect(errors.length).toBe(2)
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
