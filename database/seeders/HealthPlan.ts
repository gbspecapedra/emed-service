import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import HealthPlan from 'App/Models/HealthPlan'
import plans from '../../utils/plans.json'

export default class HealthPlanSeeder extends BaseSeeder {
  public async run() {
    await HealthPlan.createMany(plans)
  }
}
