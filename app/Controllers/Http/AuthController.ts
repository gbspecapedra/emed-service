import { string } from '@ioc:Adonis/Core/Helpers'
import Professional from 'App/Models/Professional'
import ResetPasswordValidator from 'App/Validators/ResetPasswordValidator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    try {
      const { email, password } = request.all()
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '24hours',
      })
      return token.toJSON()
    } catch (error) {
      response.badRequest(error)
    }
  }

  public async resetPassword({ request, response }: HttpContextContract) {
    try {
      const { email } = await request.validate(ResetPasswordValidator)

      const user = await Professional.findBy('email', email)
      if (!user) return response.notFound({ error: 'User not found!' })

      const newPassword = string.generateRandom(8)

      await user.merge({ password: newPassword }).save()

      // await Mail.send((message) => {
      //   message
      //     .from("no-reply@emed.com")
      //     .to("")
      //     .subject("Resetting Your Password")
      //     .htmlView("emails/reset", {
      //       user: { fullName: "" },
      //       url: "https://your-app.com/verification-url",
      //     });
      // });

      return response.ok({ password: newPassword })
    } catch (error) {
      return response.badRequest(error)
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()
    return response.ok({ revoked: true })
  }
}
