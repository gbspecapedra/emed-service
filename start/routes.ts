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
  Route.group(() => {
    Route.get('', 'ProfessionalsController.index')
    Route.get(':id', 'ProfessionalsController.show')
    Route.post('', 'ProfessionalsController.create')
    Route.put(':id', 'ProfessionalsController.update')
    Route.delete(':id', 'ProfessionalsController.destroy')
  }).prefix('professionals')

  /**
   * Patients
   */
  Route.group(() => {
    Route.get('', 'PatientsController.index')
    Route.get(':id', 'PatientsController.show')
    Route.post('', 'PatientsController.create')
    Route.put(':id', 'PatientsController.update')
    Route.delete(':id', 'PatientsController.destroy')
  }).prefix('patients')

  /**
   * Attendances
   */
  Route.group(() => {
    Route.get('', 'AttendancesController.index')
    Route.get(':id', 'AttendancesController.show')
    Route.post('', 'AttendancesController.create')
    Route.put(':id', 'AttendancesController.update')
  }).prefix('attendances')

  /**
   * Medical Records
   */
  Route.group(() => {
    Route.get(':id', 'MedicalRecordsController.show')
    Route.get(':attendanceId', 'MedicalRecordsController.showByAttendanceId')
    Route.put(':id', 'MedicalRecordsController.update')
  }).prefix('records')

  /**
   * Prescriptions
   */
  Route.group(() => {
    Route.get('', 'PrescriptionsController.index')
    Route.get(':id', 'PrescriptionsController.show')
    Route.post('', 'PrescriptionsController.create')
    Route.put(':id', 'PrescriptionsController.update')
    Route.delete(':id', 'PrescriptionsController.destroy')
  }).prefix('prescriptions')

  /**
   * Medicine
   */
  Route.group(() => {
    Route.get('', 'MedicinesController.index')
    Route.get(':id', 'MedicinesController.show')
  }).prefix('medicines')

  /**
   * Exam
   */
  Route.group(() => {
    Route.get('', 'ExamsController.index')
    Route.get(':id', 'ExamsController.show')
  }).prefix('exams')

  /**
   * Health Plan
   */
  Route.group(() => {
    Route.get('', 'HealthPlansController.index')
    Route.get(':id', 'HealthPlansController.show')
  }).prefix('plans')

  /**
   * Specialties
   */
  Route.group(() => {
    Route.get('', 'SpecialtiesController.index')
  }).prefix('specialties')
}).middleware('auth')
