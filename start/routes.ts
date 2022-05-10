/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', ({ response }) => {
  response.send({
    info: {
      title: 'eMED',
      subtitle: 'Medical Clinic Management System',
      description:
        'Final project of the Specialization Course in Web Application Development at the Pontifical Catholic University of Minas Gerais as a partial requirement to obtain the title of specialist.',
    },
  })
})

/**
 * Auth Routes
 */
Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.post('/reset', 'AuthController.resetPassword')
})

/**
 * Private Routes
 */
Route.group(() => {
  /**
   * Auth
   */
  Route.post('/logout', 'AuthController.logout')

  /**
   * Professionals
   */
  Route.get('/professionals', 'ProfessionalsController.index')
  Route.get('/professionals/:id', 'ProfessionalsController.show')
  Route.post('/professionals', 'ProfessionalsController.create')
  Route.put('/professionals/:id', 'ProfessionalsController.update')
  Route.delete('/professionals/:id', 'ProfessionalsController.destroy')
}).middleware('auth')
