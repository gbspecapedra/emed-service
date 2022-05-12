import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Attendance from 'App/Models/Attendance'
import { DateTime } from 'luxon'

export default class AttendanceSeeder extends BaseSeeder {
  public async run() {
    await Attendance.createMany([
      {
        type: 'GENERAL',
        professionalId: 1,
        patientId: 1,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'CONFIRMED',
      },
    ])
  }
}
