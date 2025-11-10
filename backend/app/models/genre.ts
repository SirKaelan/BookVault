import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Book from '#models/book'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Genre extends BaseModel {
  @column({ isPrimary: true })
  declare genreId: number

  @column()
  declare genreName: string

  @manyToMany(() => Book, {
    pivotTimestamps: true,
    pivotTable: 'book_genres',
    relatedKey: 'bookId',
    pivotForeignKey: 'genre_id',
    pivotRelatedForeignKey: 'book_id',
  })
  declare books: ManyToMany<typeof Book>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
