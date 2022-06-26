import { types } from '@ioc:Adonis/Core/Helpers'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MedicalRecord from 'App/Models/MedicalRecord'

export default class PrescriptionsController {
  public async update({ request, response }: HttpContextContract) {
    try {
      const { id, examIds, medicineIds } = request.all()

      const registerExists = await MedicalRecord.find(id)
      if (!registerExists) return response.notFound({ error: 'Medical Record not found.' })

      if (types.isArray(examIds)) await registerExists.related('exams').sync(examIds, false)

      if (types.isArray(medicineIds))
        await registerExists.related('medicines').sync(medicineIds, false)

      return response.ok({
        medicalRecord: registerExists.toJSON(),
      })
    } catch (error) {
      response.internalServerError(error)
    }
  }
}
