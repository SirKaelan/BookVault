import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('book_id')
      table.string('title', 255) // it defaults to 255, but i like it explicit
      table.text('synopsis')
      table.text('cover_url')
      table.specificType('price', 'decimal(10,2)') // 10 total digits, 2 digits after the decimal point
      table
        .integer('author_id')
        .unsigned()
        .references('author_id')
        .inTable('authors')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
