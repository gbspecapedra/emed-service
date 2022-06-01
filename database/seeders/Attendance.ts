import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Attendance from 'App/Models/Attendance'
import { DateTime } from 'luxon'

export default class AttendanceSeeder extends BaseSeeder {
  public async run() {
    await Attendance.createMany([
      {
        type: 'EMERGENCY',
        professionalId: 1,
        patientId: 1,
        medicalRecordId: 1,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'CONFIRMED',
      },
      {
        type: 'GENERAL',
        professionalId: 1,
        patientId: 2,
        medicalRecordId: 2,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'INPROGRESS',
      },
      {
        type: 'GENERAL',
        professionalId: 2,
        patientId: 3,
        medicalRecordId: 3,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'CONFIRMED',
      },
      {
        type: 'TRIAGE',
        professionalId: 3,
        patientId: 1,
        medicalRecordId: 4,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'CONFIRMED',
      },
      {
        type: 'TRIAGE',
        professionalId: 4,
        patientId: 2,
        medicalRecordId: 5,
        date: DateTime.local().plus({ days: Number(faker.random.numeric(2)) }),
        status: 'CONFIRMED',
      },
    ])
  }
}
