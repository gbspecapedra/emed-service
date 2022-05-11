import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Exam from 'App/Models/Exam'
import exams from '../../utils/exams.json'

export default class ExamSeeder extends BaseSeeder {
  public async run() {
    await Exam.createMany(exams)
  }
}
