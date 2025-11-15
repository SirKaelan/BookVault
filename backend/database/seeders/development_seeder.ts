import db from '@adonisjs/lucid/services/db'
import env from '#start/env'

import { BaseSeeder } from '@adonisjs/lucid/seeders'

import { AuthorFactory } from '#database/factories/author_factory'
import { BookFactory } from '#database/factories/book_factory'

import Genre from '#models/genre'

import { shuffle } from '#helpers/shuffle'
import { randomIntInclusive } from '#helpers/random_int_inclusive'

export default class extends BaseSeeder {
  async run() {
    if (env.get('NODE_ENV') !== 'development') return

    // In a transaction in case any of this fails, we wipe any writes
    await db.transaction(async (trx) => {
      // Fetch the genres
      const genres = await Genre.query({ client: trx })

      // Create a few authors without books
      await AuthorFactory.client(trx).createMany(5)

      // Create a few authors with books + genres
      const authors = await AuthorFactory.client(trx).createMany(10)

      for (const author of authors) {
        const authorBooks = await BookFactory.client(trx)
          .merge({ authorId: author.authorId })
          .createMany(10)
        // Add genres for SOME books
        for (const book of authorBooks) {
          // ~80% of books should have genres
          if (Math.random() > 0.2) {
            const genreIds = genres.map((g) => g.genreId)
            const shuffledGenres = shuffle(genreIds)
            const genreQuantity = randomIntInclusive(1, 6)
            const pickedGenres = shuffledGenres.slice(0, genreQuantity)
            await book.useTransaction(trx).related('genres').attach(pickedGenres)
          }
        }
      }
    })
  }
}
