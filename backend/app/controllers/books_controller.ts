import type { HttpContext } from '@adonisjs/core/http'

export default class BooksController {
  async index({ response }: HttpContext) {
    response.send('Paginated response for books endpoint!')
  }

  async show({ params, response }: HttpContext) {
    response.send(`Single book data with id of ${params.id} endpoint!`)
  }

  async genres({ params, response }: HttpContext) {
    response.send(`All genres of a single book with id of ${params.id} endpoint!`)
  }
}
