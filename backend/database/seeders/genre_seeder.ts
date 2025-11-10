import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Genre from '#models/genre'

export default class extends BaseSeeder {
  async run() {
    await Genre.createMany([
      { genreName: 'Fantasy' },
      { genreName: 'Young Adult' },
      { genreName: 'Novel' },
    ])
  }
}
