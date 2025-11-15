import factory from '@adonisjs/lucid/factories'
import Author from '#models/author'
import { BookFactory } from '#database/factories/book_factory'

export const AuthorFactory = factory
  .define(Author, async ({ faker }) => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      bio: faker.person.bio(),
    }
  })
  .relation('books', () => BookFactory)
  .build()
