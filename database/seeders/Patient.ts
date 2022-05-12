import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Patient from 'App/Models/Patient'
import { DateTime } from 'luxon'

export default class PatientSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'socialNumber'

    await Patient.updateOrCreateMany(uniqueKey, [
      {
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        socialNumber: faker.datatype.number({ min: 6 }),
        birthday: DateTime.local().minus({ years: 20 }),
        gender: faker.name.gender(),
        contact: faker.phone.phoneNumber(),
        zipcode: faker.address.zipCode(),
        street: faker.address.streetName(),
        number: Number(faker.address.buildingNumber()),
        county: faker.address.county(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: faker.address.country(),
        active: true,
      },
      {
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        socialNumber: faker.datatype.number({ min: 6 }),
        birthday: DateTime.local().minus({ years: 15 }),
        gender: faker.name.gender(),
        contact: faker.phone.phoneNumber(),
        zipcode: faker.address.zipCode(),
        street: faker.address.streetName(),
        number: Number(faker.address.buildingNumber()),
        county: faker.address.county(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: faker.address.country(),
        healthPlanId: 5,
        healthPlanExpiration: DateTime.local().plus({ years: 1 }),
        active: true,
      },
      {
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        socialNumber: faker.datatype.number({ min: 6 }),
        birthday: DateTime.local().minus({ years: 10 }),
        gender: faker.name.gender(),
        contact: faker.phone.phoneNumber(),
        zipcode: faker.address.zipCode(),
        street: faker.address.streetName(),
        number: Number(faker.address.buildingNumber()),
        county: faker.address.county(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: faker.address.country(),
        healthPlanId: 8,
        healthPlanExpiration: DateTime.local().plus({ years: 2 }),
        active: true,
      },
    ])
  }
}
