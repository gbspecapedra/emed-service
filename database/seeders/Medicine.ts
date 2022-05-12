import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Medicine from 'App/Models/Medicine'

import medicines from '../../utils/medicines.json'

export default class MedicineSeeder extends BaseSeeder {
  public async run() {
    await Medicine.createMany(medicines)
  }
}
