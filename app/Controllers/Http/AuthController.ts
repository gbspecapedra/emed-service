import { string } from '@ioc:Adonis/Core/Helpers'
import Professional from 'App/Models/Professional'
import ResetPasswordValidator from 'App/Validators/ResetPasswordValidator'
import Env from '@ioc:Adonis/Core/Env'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
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

  public async resetPassword({ request, response }: HttpContextContract) {
    try {
      const { email } = await request.validate(ResetPasswordValidator)

      const user = await Professional.findBy('email', email)
      if (!user) return response.notFound({ error: 'User not found.' })

      const newPassword = string.generateRandom(8)

      await user.merge({ password: newPassword }).save()

      await Mail.use('mailgun').send((message) => {
        message
          .from(`no-reply@${Env.get('MAILGUN_DOMAIN')}`)
          .to(email)
          .subject('eMED - Your password reset!')
          .html(`<p> Your new password is: ${newPassword} </p>`)
      })

      return response.ok({ password: true })
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()
    return response.ok({ revoked: true })
  }
}
