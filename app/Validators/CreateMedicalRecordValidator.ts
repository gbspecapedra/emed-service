import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateMedicalRecordValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    attendanceId: schema.number([rules.unsigned()]),
    description: schema.string.nullableAndOptional({ trim: true }),
  })

  public messages = {
    required: '{{ field }} is required',
  }
}
