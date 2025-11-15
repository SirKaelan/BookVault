import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'genres'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('genre_id')
      table.string('genre_name', 100).unique()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
