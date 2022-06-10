import MedicalRecord from 'App/Models/MedicalRecord'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class MedicalRecordsController {
  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await MedicalRecord.query()
      .preload('exams')
      .preload('medicines')
      .where('id', '=', id)
      .first()
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
      } = request.all()

      const registerExists = await MedicalRecord.find(id)
      if (!registerExists) return response.notFound({ error: 'Medical Record not found.' })

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
