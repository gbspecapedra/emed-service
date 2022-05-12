import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatePrescriptionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    medicalRecordId: schema.number([rules.unsigned()]),
    description: schema.string({ trim: true }),
  })

  public messages = {
    required: '{{ field }} is required',
  }
}
