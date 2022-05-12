import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Prescription from 'App/Models/Prescription'

export default class PrescriptionSeeder extends BaseSeeder {
  public async run() {
    await Prescription.createMany([
      {
        medicalRecordId: 1,
        description: faker.lorem.text(),
      },
      {
        medicalRecordId: 1,
        description: faker.lorem.text(),
      },
    ])
  }
}
