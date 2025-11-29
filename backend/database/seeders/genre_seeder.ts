import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Genre from '#models/genre'

export default class extends BaseSeeder {
  async run() {
    await Genre.createMany([
      { genreName: 'Fantasy' },
      { genreName: 'Young Adult' },
      { genreName: 'Novel' },
      { genreName: 'Biography' },
      { genreName: 'Crime' },
      { genreName: 'Historical Fiction' },
      { genreName: 'Horror' },
      { genreName: 'Literary Fiction' },
      { genreName: 'Mystery' },
      { genreName: 'Non-Fiction' },
      { genreName: 'Philosophy' },
      { genreName: 'Poetry' },
      { genreName: 'Romance' },
      { genreName: 'Science Fiction' },
      { genreName: 'Self-Help' },
      { genreName: 'Thriller' },
    ])
  }
}
