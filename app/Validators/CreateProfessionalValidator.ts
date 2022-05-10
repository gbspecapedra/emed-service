import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateProfessionalValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type: schema.enum(['DOCTOR', 'NURSE'] as const),
    name: schema.string({ trim: true }),
    registrationNumber: schema.number([
      rules.unique({ table: 'professionals', column: 'registration_number' }),
    ]),
    registrationState: schema.string({ trim: true }, [rules.minLength(2), rules.maxLength(2)]),
    specialty: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'professionals', column: 'email' }),
      rules.normalizeEmail({
        allLowercase: true,
      }),
    ]),
  })

  public messages = {
    'required': '{{ field }} is required',
    'email.email': 'Enter a valid email',
    'email.unique': 'Email already registered',
  }
}
