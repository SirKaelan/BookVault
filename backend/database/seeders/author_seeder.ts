import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Author from '#models/author'

export default class extends BaseSeeder {
  async run() {
    await Author.createMany([
      {
        firstName: 'Brandon',
        lastName: 'Sanderson',
        bio: 'The best author, period.',
      },
      {
        firstName: 'Brent',
        lastName: 'Weeks',
        bio: 'Second best author.',
      },
      {
        firstName: 'Brian',
        lastName: 'McClellan',
        bio: 'Third best author.',
      },
    ])
  }
}
