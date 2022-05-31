import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'

import MedicalRecord from './MedicalRecord'

export default class Exam extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @manyToMany(() => MedicalRecord, {
    pivotTable: 'medical_record_medicine',
    pivotForeignKey: 'exam_id',
    pivotRelatedForeignKey: 'medical_record_id',
  })
  public medicalRecords: ManyToMany<typeof MedicalRecord>
}
