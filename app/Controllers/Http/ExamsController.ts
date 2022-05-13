import Exam from 'App/Models/Exam'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExamsController {
  public async index() {
    return await Exam.all()
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await Exam.findOrFail(id)
  }
}
