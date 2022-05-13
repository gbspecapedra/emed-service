import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateAttendanceValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type: schema.enum(['GENERAL', 'EMERGENCY', 'TRIAGE'] as const),
    professionalId: schema.number([rules.unsigned()]),
    patientId: schema.number([rules.unsigned()]),
    date: schema.date({}, [rules.after('today')]),
    cancellationReason: schema.string({ trim: true }, [
      rules.requiredWhen('status', '=', 'CANCELED'),
    ]),
  })

  public messages = {
    required: '{{ field }} is required',
  }
}
