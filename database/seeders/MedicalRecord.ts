import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MedicalRecord from 'App/Models/MedicalRecord'

export default class MedicalRecordSeeder extends BaseSeeder {
  public async run() {
    await MedicalRecord.createMany([
      {
        description: faker.lorem.text(),
      },
      {
        description: faker.lorem.text(),
      },
    ])
  }
}
