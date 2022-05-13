import HealthPlan from 'App/Models/HealthPlan'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HealthPlansController {
  public async index() {
    return await HealthPlan.all()
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await HealthPlan.findOrFail(id)
  }
}
