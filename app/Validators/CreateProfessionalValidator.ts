import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateProfessionalValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type: schema.enum(['ADMIN', 'RECEPTIONIST', 'DOCTOR', 'NURSE'] as const),
    name: schema.string({ trim: true }),
    registrationNumber: schema.number([
      rules.unsigned(),
      rules.unique({ table: 'professionals', column: 'registration_number' }),
      rules.requiredWhen('type', 'notIn', ['ADMIN', 'RECEPTIONIST']),
    ]),
    registrationState: schema.string({ trim: true }, [
      rules.minLength(2),
      rules.maxLength(2),
      rules.requiredWhen('type', 'notIn', ['ADMIN', 'RECEPTIONIST']),
    ]),
    specialty: schema.string({ trim: true }, [
      rules.requiredWhen('type', 'notIn', ['ADMIN', 'RECEPTIONIST']),
    ]),
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
    'registrationNumber.unique':
      'There is a professional with this registration number. Try another one',
    'email.email': 'Enter a valid email',
    'email.unique': 'There is a professional with this email. Try another one',
  }
}
