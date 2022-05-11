import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Attendance from 'App/Models/Attendance'
import { DateTime } from 'luxon'
import { faker } from '@faker-js/faker'

export default class AttendanceSeeder extends BaseSeeder {
  public async run() {
    await Attendance.createMany([
      {
        type: 'GENERAL',
        medicalRecordId: 1,
        professionalId: 1,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
      },
    ])
  }
}
