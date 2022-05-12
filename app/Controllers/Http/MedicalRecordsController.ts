import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MedicalRecord from 'App/Models/MedicalRecord'
import CreateMedicalRecordValidator from 'App/Validators/CreateMedicalRecordValidator'

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
      const record = await request.validate(CreateMedicalRecordValidator)

      return await MedicalRecord.create({ ...record })
    } catch (error) {
      response.badRequest(error)
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id, ...record } = request.all()

      const recordExists = await MedicalRecord.find(id)
      if (!recordExists) return response.notFound({ message: 'Medical Record not found' })

      return await recordExists.merge(record).save()
    } catch (error) {
      response.internalServerError(error)
    }
  }
}
