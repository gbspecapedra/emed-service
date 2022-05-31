import { column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'

import Attendance from './Attendance'
import Exam from './Exam'
import Medicine from './Medicine'

export default class MedicalRecord extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string

  @column()
  public weight: number

  @column()
  public height: number

  @column()
  public bmi: string

  @column()
  public diastolicPressure: number

  @column()
  public systolicPressure: number

  @column()
  public temperature: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Attendance, {
    localKey: 'id',
    foreignKey: 'medicalRecordId',
  })
  public attendances: HasMany<typeof Attendance>

  @manyToMany(() => Medicine, {
    pivotTable: 'medical_record_medicine',
    pivotForeignKey: 'medical_record_id',
    pivotRelatedForeignKey: 'medicine_id',
  })
  public medicines: ManyToMany<typeof Medicine>

  @manyToMany(() => Exam, {
    pivotTable: 'medical_record_exam',
    pivotForeignKey: 'medical_record_id',
    pivotRelatedForeignKey: 'exam_id',
  })
  public exams: ManyToMany<typeof Exam>
}
