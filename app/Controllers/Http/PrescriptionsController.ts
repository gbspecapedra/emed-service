import Prescription from 'App/Models/Prescription'
import CreatePrescriptionValidator from 'App/Validators/CreatePrescriptionValidator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class PrescriptionsController {
  public async index() {
    return await Prescription.all()
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await Prescription.findOrFail(id)
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const prescription = await request.validate(CreatePrescriptionValidator)

      return await Prescription.create({ ...prescription })
    } catch (error) {
      response.badRequest(error)
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id, ...prescription } = request.all()

      const prescriptionExists = await Prescription.find(id)
      if (!prescriptionExists) return response.notFound({ error: 'Prescription not found.' })

      return await prescriptionExists.merge(prescription).save()
    } catch (error) {
      response.internalServerError(error)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()

      const prescriptionExists = await Prescription.find(id)
      if (!prescriptionExists) return response.notFound({ error: 'Prescription not found.' })

      return await prescriptionExists.delete()
    } catch (error) {
      response.internalServerError(error)
    }
  }
}
