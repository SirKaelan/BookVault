import { DateTime } from 'luxon'

import Genre from '#models/genre'
import Author from '#models/author'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare bookId: number

  @column()
  declare title: string

  @column()
  declare synopsis: string

  @column()
  declare coverUrl: string

  @column()
  declare price: number

  @column()
  declare authorId: number

  @belongsTo(() => Author, { foreignKey: 'authorId' })
  declare author: BelongsTo<typeof Author>

  @manyToMany(() => Genre, {
    pivotTimestamps: true, // so Lucid automatically handles them (both tables need to have this enabled)
    pivotTable: 'book_genres', // my pivot table has a different name
    relatedKey: 'genreId',
    pivotForeignKey: 'book_id',
    pivotRelatedForeignKey: 'genre_id',
  })
  declare genres: ManyToMany<typeof Genre>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime
}
