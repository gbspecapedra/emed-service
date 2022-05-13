import Patient from 'App/Models/Patient'
import CreatePatientValidator from 'App/Validators/CreatePatientValidator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PatientsController {
  public async index() {
    return await Patient.all()
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await Patient.findOrFail(id)
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const patient = await request.validate(CreatePatientValidator)

      return await Patient.create({ ...patient, active: true })
    } catch (error) {
      response.badRequest(error)
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id, ...patient } = request.all()

      const patientExists = await Patient.find(id)
      if (!patientExists) return response.notFound({ message: 'Patient not found' })

      return await patientExists.merge(patient).save()
    } catch (error) {
      response.internalServerError(error)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()

      const patientExists = await Patient.find(id)
      if (!patientExists) return response.notFound({ message: 'Patient not found' })

      return await patientExists.merge({ active: false }).save()
    } catch (error) {
      response.internalServerError(error)
    }
  }
}
