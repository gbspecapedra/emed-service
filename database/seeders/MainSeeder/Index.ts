import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in dev mode and seeder is development
     * only
     */
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../HealthPlan'))
    await this.runSeeder(await import('../Exam'))
    await this.runSeeder(await import('../Medicine'))
    await this.runSeeder(await import('../Professional'))
    await this.runSeeder(await import('../Patient'))
    await this.runSeeder(await import('../Attendance'))
    await this.runSeeder(await import('../MedicalRecord'))
    await this.runSeeder(await import('../MedicalRecordMedicine'))
    await this.runSeeder(await import('../MedicalRecordExam'))
    await this.runSeeder(await import('../Prescription'))
  }
}
