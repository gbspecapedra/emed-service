import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Attendance from 'App/Models/Attendance'
import { DateTime } from 'luxon'

export default class AttendanceSeeder extends BaseSeeder {
  public async run() {
    await Attendance.createMany([
      {
        type: 'TRIAGE',
        professionalId: 1,
        patientId: 1,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'CONFIRMED',
      },
      {
        type: 'TRIAGE',
        professionalId: 2,
        patientId: 2,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'DONE',
      },
      {
        type: 'EMERGENCY',
        professionalId: 3,
        patientId: 3,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'INPROGRESS',
      },
      {
        type: 'GENERAL',
        professionalId: 4,
        patientId: 5,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'DONE',
      },
      {
        type: 'GENERAL',
        professionalId: 4,
        patientId: 5,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'CANCELED',
      },
    ])
  }
}
