import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professional from 'App/Models/Professional'
import ProfessionalFactory from 'Database/factories/ProfessionalFactory'

export default class ProfessionalSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'

    const professionals = await ProfessionalFactory.merge([
      { email: 'doctor1@emed.com' },
      { email: 'doctor2@emed.com' },
      { role: 'NURSE', email: 'nurse1@emed.com' },
      { role: 'NURSE', email: 'nurse2@emed.com' },
      {
        role: 'ADMIN',
        email: 'admin@emed.com',
        registrationNumber: undefined,
        registrationState: undefined,
        specialty: undefined,
      },
      {
        role: 'RECEPTIONIST',
        email: 'contact@emed.com',
        registrationNumber: undefined,
        registrationState: undefined,
        specialty: undefined,
      },
    ]).createMany(6)

    await Professional.updateOrCreateMany(uniqueKey, professionals)
  }
}
