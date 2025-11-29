/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const BooksController = () => import('#controllers/books_controller')
const AuthorsController = () => import('#controllers/authors_controller')

// Book endpoints
// Might be a useless endpoint and i can just eager-load genres when fetching books
router.get('/books/:id/genres', [BooksController, 'genres'])
router.get('/books/:id', [BooksController, 'show'])
router.get('/books', [BooksController, 'index'])

// Author endpoints
router.get('/authors/:id/books', [AuthorsController, 'books'])
router.get('/authors/:id', [AuthorsController, 'show'])
