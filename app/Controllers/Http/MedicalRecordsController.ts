import MedicalRecord from 'App/Models/MedicalRecord'
import CreateMedicalRecordValidator from 'App/Validators/CreateMedicalRecordValidator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class MedicalRecordsController {
  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await MedicalRecord.findOrFail(id)
  }

  public async showByAttendanceId({ request }: HttpContextContract) {
    const { attendanceId } = request.params()
    return await MedicalRecord.findOrFail(attendanceId)
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const register = await request.validate(CreateMedicalRecordValidator)

      return await MedicalRecord.create({ ...register })
    } catch (error) {
      response.badRequest(error)
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id, ...register } = request.all()

      const registerExists = await MedicalRecord.find(id)
      if (!registerExists) return response.notFound({ error: 'Medical Record not found.' })

      return await registerExists.merge(register).save()
    } catch (error) {
      response.internalServerError(error)
    }
  }
}
