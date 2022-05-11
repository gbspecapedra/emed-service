import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MedicalRecord from 'App/Models/MedicalRecord'
import { faker } from '@faker-js/faker'

export default class MedicalRecordSeeder extends BaseSeeder {
  public async run() {
    await MedicalRecord.createMany([
      {
        patientId: 1,
        description: faker.lorem.text(),
      },
      {
        patientId: 2,
        description: faker.lorem.text(),
      },
    ])
  }
}
