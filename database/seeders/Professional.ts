import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professional from 'App/Models/Professional'
import { faker } from '@faker-js/faker'

export default class ProfessionalSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'

    await Professional.updateOrCreateMany(uniqueKey, [
      {
        type: 'NURSE',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        registrationNumber: faker.datatype.number({ min: 6 }),
        registrationState: faker.datatype.string(2),
        specialty: faker.name.jobType(),
        email: 'nurse-one@emed.com',
        password: '1234567Aa!',
        active: true,
      },
      {
        type: 'NURSE',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        registrationNumber: faker.datatype.number({ min: 6 }),
        registrationState: faker.datatype.string(2),
        specialty: faker.name.jobType(),
        email: 'nurse-two@emed.com',
        password: '1234567Aa!',
        active: true,
      },
      {
        type: 'DOCTOR',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        registrationNumber: faker.datatype.number({ min: 6 }),
        registrationState: faker.datatype.string(2),
        specialty: faker.name.jobType(),
        email: 'doctor-one@emed.com',
        password: '1234567Aa!',
        active: true,
      },
      {
        type: 'DOCTOR',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        registrationNumber: faker.datatype.number({ min: 6 }),
        registrationState: faker.datatype.string(2),
        specialty: faker.name.jobType(),
        email: 'doctor-two@emed.com',
        password: '1234567Aa!',
        active: true,
      },
    ])
  }
}