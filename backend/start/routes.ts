/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// Validate "id" param globally with built-in matcher for numbers
router.where('id', router.matchers.number())

router.get('/', async () => {
  return 'Home endpoint!'
})

// Book endpoints
router.get('/books', async () => {
  return 'Paginated books endpoint!'
})

router.get('/books/:id', async ({ params }) => {
  return `Single book data with id of ${params.id} endpoint!`
})

router.get('/books/:id/genres', async ({ params }) => {
  return `All genres of a single book with id of ${params.id} endpoint!`
})

// Author endpoints
router.get('/authors/:id', async ({ params }) => {
  return `Single author data with id of ${params.id} endpoint!`
})

router.get('/authors/:id/books', async ({ params }) => {
  return `All books of a single author with id of ${params.id} endpoint!`
})
