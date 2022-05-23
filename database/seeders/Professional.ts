import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professional from 'App/Models/Professional'

export default class ProfessionalSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'

    await Professional.updateOrCreateMany(uniqueKey, [
      {
        role: 'NURSE',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        registrationNumber: faker.datatype.number({ min: 6 }),
        registrationState: faker.address.stateAbbr(),
        specialty: faker.name.jobType(),
        email: 'nurse-one@emed.com',
        password: '1234567Aa!',
        active: true,
      },
      {
        role: 'NURSE',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        registrationNumber: faker.datatype.number({ min: 6 }),
        registrationState: faker.address.stateAbbr(),
        specialty: faker.name.jobType(),
        email: 'nurse-two@emed.com',
        password: '1234567Aa!',
        active: false,
      },
      {
        role: 'DOCTOR',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        registrationNumber: faker.datatype.number({ min: 6 }),
        registrationState: faker.address.stateAbbr(),
        specialty: faker.name.jobType(),
        email: 'doctor-one@emed.com',
        password: '1234567Aa!',
        active: true,
      },
      {
        role: 'DOCTOR',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        registrationNumber: faker.datatype.number({ min: 6 }),
        registrationState: faker.address.stateAbbr(),
        specialty: faker.name.jobType(),
        email: 'doctor-two@emed.com',
        password: '1234567Aa!',
        active: false,
      },
      {
        role: 'ADMIN',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        email: 'admin@emed.com',
        password: '1234567Aa!',
        active: true,
      },
      {
        role: 'RECEPTIONIST',
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        email: 'contact@emed.com',
        password: '1234567Aa!',
        active: true,
      },
    ])
  }
}
