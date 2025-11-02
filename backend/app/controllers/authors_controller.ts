import type { HttpContext } from '@adonisjs/core/http'

export default class AuthorsController {
  async show({ params, response }: HttpContext) {
    response.send(`Single author data with id of ${params.id} endpoint!`)
  }

  async books({ params, response }: HttpContext) {
    response.send(`All books of a single author with id of ${params.id} endpoint!`)
  }
}
