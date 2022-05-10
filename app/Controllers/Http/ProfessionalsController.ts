import { string } from '@ioc:Adonis/Core/Helpers'
import Professional from 'App/Models/Professional'
import CreateProfessionalValidator from 'App/Validators/CreateProfessionalValidator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class ProfessionalsController {
  public async index() {
    return await Professional.all()
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    return await Professional.findOrFail(id)
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const { type, name, registrationNumber, registrationState, specialty, email } =
        await request.validate(CreateProfessionalValidator)

      return await Professional.create({
        type,
        name,
        registrationNumber,
        registrationState,
        specialty,
        email,
        password: string.generateRandom(8),
        active: true,
      })
    } catch (error) {
      response.badRequest(error)
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id, name, specialty, email, oldPassword, password } = request.all()

      const professional = await Professional.find(id)
      if (!professional) return response.notFound({ message: 'Professional not found' })

      if (email && email !== professional.email) {
        const professionalExists = await Professional.find({ where: { email } })
        if (professionalExists)
          return response.badRequest({
            message: 'There is a professional with this email. Try another one',
          })
      }

      if (oldPassword && !(await professional.checkPassword(oldPassword))) {
        return response.badRequest({ message: 'Current password does not match' })
      }

      return await professional
        .merge({
          name,
          specialty,
          email,
          password,
        })
        .save()
    } catch (error) {
      response.internalServerError(error)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()

      const professional = await Professional.find(id)
      if (!professional) return response.notFound({ message: 'Professional not found' })

      return await professional.delete()
    } catch (error) {
      response.internalServerError(error)
    }
  }
}
