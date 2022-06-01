import MedicalRecord from 'App/Models/MedicalRecord'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class MedicalRecordsController {
  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await MedicalRecord.findOrFail(id)
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const {
        id,
        description,
        weight,
        height,
        bmi,
        diastolicPressure,
        systolicPressure,
        temperature,
        medicineIds,
        examIds,
      } = request.all()

      const registerExists = await MedicalRecord.find(id)
      if (!registerExists) return response.notFound({ error: 'Medical Record not found.' })

      //if (medicineIds.length > 0) await registerExists.related('medicines').sync(medicineIds, false)

      //if (examIds.length > 0) await registerExists.related('exams').sync(examIds, false)

      return await registerExists
        .merge({
          description,
          weight,
          height,
          bmi,
          diastolicPressure,
          systolicPressure,
          temperature,
        })
        .save()
    } catch (error) {
      response.internalServerError(error)
    }
  }
}
