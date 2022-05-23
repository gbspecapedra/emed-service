import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import specialties from '../../../utils/specialties.json'

export default class SpecialtiesController {
  public async index({ response }: HttpContextContract) {
    return response.ok(specialties)
  }
}
