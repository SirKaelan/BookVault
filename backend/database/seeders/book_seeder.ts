import db from '@adonisjs/lucid/services/db'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Author from '#models/author'
import Genre from '#models/genre'
import Book from '#models/book'

type BookData = {
  title: string
  author: string
  genres: string[]
  price: number
}

export default class extends BaseSeeder {
  async run() {
    const booksData: BookData[] = [
      {
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        genres: ['Fantasy', 'Novel'],
        price: 16.99,
      },
      {
        title: 'Rhythm of War',
        author: 'Brandon Sanderson',
        genres: ['Fantasy', 'Novel'],
        price: 18.99,
      },
      {
        title: 'Oathbringer',
        author: 'Brandon Sanderson',
        genres: ['Young Adult', 'Novel'],
        price: 17.99,
      },
      {
        title: 'The Black Prism',
        author: 'Brent Weeks',
        genres: ['Fantasy', 'Novel'],
        price: 13.99,
      },
    ]

    await db.transaction(async (trx) => {
      for (let bookData of booksData) {
        // Grab Author data instance
        const author = await Author.query({ client: trx })
          .where('first_name', bookData.author.split(' ')[0])
          .where('last_name', bookData.author.split(' ')[1])
          .firstOrFail()

        // Find and get genre ids in an array from their names
        const genres = await Genre.query({ client: trx }).whereIn('genre_name', bookData.genres)
        const foundGenres = new Set(genres.map((row) => row.genreName))
        const missingGenres = bookData.genres.filter((genre) => !foundGenres.has(genre))
        if (missingGenres.length) throw new Error(`Missing genres: ${missingGenres.join(', ')}`)
        const genreIds = genres.map((row) => row.genreId)

        // Create a book row
        const book = await Book.create(
          {
            title: bookData.title,
            synopsis: 'Lorem impsum',
            coverUrl: undefined,
            price: bookData.price,
          },
          { client: trx }
        )

        // Add all relationship data
        await book.related('author').associate(author)
        await book.related('genres').attach(genreIds)
      }
    })
  }
}
