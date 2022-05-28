import Attendance from 'App/Models/Attendance'
import CreateAttendanceValidator from 'App/Validators/CreateAttendanceValidator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AttendancesController {
  public async index() {
    return await Attendance.query().preload('patient').preload('professional')
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await Attendance.query()
      .preload('patient')
      .preload('record')
      .where('id', '=', id)
      .first()
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const attendance = await request.validate(CreateAttendanceValidator)

      return await Attendance.create({
        ...attendance,
        status: 'CONFIRMED',
      })
    } catch (error) {
      response.badRequest(error)
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id, date, status, cancellationReason } = request.all()

      const attendanceExists = await Attendance.find(id)
      if (!attendanceExists) return response.notFound({ error: 'Register not found.' })

      return await attendanceExists
        .merge({
          date,
          status,
          cancellationReason,
        })
        .save()
    } catch (error) {
      response.internalServerError(error)
    }
  }
}
