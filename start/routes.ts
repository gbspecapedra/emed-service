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

  /**
   * Patients
   */
  Route.get('/patients', 'PatientsController.index')
  Route.get('/patients/:id', 'PatientsController.show')
  Route.post('/patients', 'PatientsController.create')
  Route.put('/patients/:id', 'PatientsController.update')
  Route.delete('/patients/:id', 'PatientsController.destroy')

  /**
   * Attendances
   */
  Route.get('/attendance', 'AttendancesController.index')
  Route.post('/attendance', 'AttendancesController.create')
  Route.put('/attendance/:id', 'AttendancesController.update')

  /**
   * Medical Records
   */
  Route.get('/record/:id', 'MedicalRecordsController.show')
  Route.get('/record/:id', 'MedicalRecordsController.showByAttendanceId')
  Route.post('/record', 'MedicalRecordsController.create')
  Route.put('/record/:id', 'MedicalRecordsController.update')

  /**
   * Prescriptions
   */
  Route.get('/prescriptions', 'PrescriptionsController.index')
  Route.get('/prescriptions/:id', 'PrescriptionsController.show')
  Route.post('/prescriptions', 'PrescriptionsController.create')
  Route.put('/prescriptions/:id', 'PrescriptionsController.update')
  Route.delete('/prescriptions/:id', 'PrescriptionsController.destroy')
}).middleware('auth')
