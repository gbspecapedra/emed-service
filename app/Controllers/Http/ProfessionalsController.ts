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
      const professional = await request.validate(CreateProfessionalValidator)

      return await Professional.create({
        ...professional,
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

      const professionalExists = await Professional.find(id)
      if (!professionalExists) return response.notFound({ message: 'Professional not found' })

      if (email && email !== professionalExists.email) {
        const emailAlreadyExists = await Professional.find({ where: { email } })
        if (emailAlreadyExists)
          return response.badRequest({
            message: 'There is a professional with this email. Try another one',
          })
      }

      if (oldPassword && !(await professionalExists.checkPassword(oldPassword))) {
        return response.badRequest({ message: 'Current password does not match' })
      }

      return await professionalExists
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

      const professionalExists = await Professional.find(id)
      if (!professionalExists) return response.notFound({ message: 'Professional not found' })

      return await professionalExists.merge({ active: false }).save()
    } catch (error) {
      response.internalServerError(error)
    }
  }
}
