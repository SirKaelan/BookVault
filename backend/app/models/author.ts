import Book from '#models/book'
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Author extends BaseModel {
  @column({ isPrimary: true })
  declare authorId: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare bio: string

  @hasMany(() => Book)
  declare books: HasMany<typeof Book>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
