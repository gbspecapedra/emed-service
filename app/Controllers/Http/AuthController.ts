import Professional from 'App/Models/Professional'
import ResetPasswordValidator from 'App/Validators/ResetPasswordValidator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    try {
      const { email, password } = request.all()

      const user = await Professional.findBy('email', email)
      if (!user) return response.notFound({ error: 'User not found.' })

      if (!user.active) return response.forbidden({ error: 'User needs to be active to login.' })

      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '24hours',
      })

      return response.ok({
        user: user,
        access: token.toJSON(),
      })
    } catch (error) {
      response.internalServerError(error)
    }
  }

  public async findUserByEmail({ request, response }: HttpContextContract) {
    const { email } = await request.validate(ResetPasswordValidator)

    const user = await Professional.findBy('email', email)
    if (!user) return response.notFound({ error: 'Email not found or invalid.' })

    return response.ok({ user: user })
  }

  public async resetPassword({ request, response }: HttpContextContract) {
    try {
      const { email, password } = request.all()

      const user = await Professional.findBy('email', email)
      if (!user) return response.notFound({ error: 'User not found.' })

      await user.merge({ password: password }).save()

      return response.ok({ updated: true })
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()
    return response.ok({ revoked: true })
  }
}
