import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatePatientValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    socialNumber: schema.number([
      rules.unsigned(),
      rules.unique({ table: 'patients', column: 'social_number' }),
    ]),
    birthday: schema.date({}, [rules.before('today')]),
    gender: schema.string({ trim: true }),
    contact: schema.string({ trim: true }, [rules.mobile()]),
    zipcode: schema.string({ trim: true }),
    street: schema.string({ trim: true }),
    number: schema.number.optional([rules.unsigned()]),
    complement: schema.string.optional({ trim: true }),
    county: schema.string({ trim: true }),
    city: schema.string({ trim: true }),
    state: schema.string({ trim: true }),
    country: schema.string({ trim: true }),
    healthPlanId: schema.number.optional(),
    healthPlanExpiration: schema.date.optional({}, [rules.requiredIfExists('healthPlanId')]),
  })

  public messages = {
    'required': '{{ field }} is required',
    'socialNumber.unique': 'There is a patient with this social number.',
  }
}
