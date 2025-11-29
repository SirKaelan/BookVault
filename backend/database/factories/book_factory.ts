import factory from '@adonisjs/lucid/factories'
import Book from '#models/book'

export const BookFactory = factory
  .define(Book, async ({ faker }) => {
    return {
      title: faker.book.title(),
      synopsis: faker.lorem.paragraphs(2),
      coverUrl: faker.internet.url(),
      price: faker.number.float({ min: 10, max: 20, fractionDigits: 2 }),
    }
  })
  .build()
