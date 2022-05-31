import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Patient from 'App/Models/Patient'
import PatientFactory from 'Database/factories/PatientFactory'
import { DateTime } from 'luxon'

export default class PatientSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'socialNumber'

    const patients = await PatientFactory.merge([
      {
        healthPlanId: 1,
        healthPlanExpiration: DateTime.fromISO(faker.date.future(1).toISOString()),
      },
      {
        healthPlanId: 2,
        healthPlanExpiration: DateTime.fromISO(faker.date.future(2).toISOString()),
      },
      {
        healthPlanId: 3,
        healthPlanExpiration: DateTime.fromISO(faker.date.future(3).toISOString()),
      },
    ]).createMany(6)

    await Patient.updateOrCreateMany(uniqueKey, patients)
  }
}
