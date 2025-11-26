import { test } from '@japa/runner'

import Book from '#models/book'
import { PaginatedResponse } from '#types/index'
import testUtils from '@adonisjs/core/services/test_utils'
import { BookFactory } from '#database/factories/book_factory'

test.group('Books - list (GET /books)', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  // test happy path
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
  test('returns 200 and empty array when no books exist', async () => {})
  // test unhappy 422 response (bad QPs)
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
