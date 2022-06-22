import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Patient from 'App/Models/Patient'
import PatientFactory from 'Database/factories/PatientFactory'

export default class PatientSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'socialNumber'

    const patients = await PatientFactory.createMany(6)

    await Patient.updateOrCreateMany(uniqueKey, patients)
  }
}
