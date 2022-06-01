import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MedicalRecord from 'App/Models/MedicalRecord'

export default class MedicalRecordSeeder extends BaseSeeder {
  public async run() {
    await MedicalRecord.createMany([
      {
        description: undefined,
      },
      {
        description: faker.lorem.text(),
        weight: 58,
        height: 175,
        diastolicPressure: 110,
        systolicPressure: 115,
        temperature: 34.5,
      },
      {
        description: undefined,
      },
      {
        description: undefined,
      },
      {
        description: undefined,
      },
    ])
  }
}
