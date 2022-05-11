import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import Exam from './Exam'
import Medicine from './Medicine'
import Prescription from './Prescription'

export default class MedicalRecord extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public patientId: number

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Prescription, {
    localKey: 'id',
    foreignKey: 'medicalRecordId',
  })
  public prescriptions: HasMany<typeof Prescription>

  @manyToMany(() => Medicine)
  public medicines: ManyToMany<typeof Medicine>

  @manyToMany(() => Exam)
  public exams: ManyToMany<typeof Exam>
}
