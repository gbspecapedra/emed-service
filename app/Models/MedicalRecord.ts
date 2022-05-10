import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Medicine from './Medicine'
import Exam from './Exam'

export default class MedicalRecord extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public patientId: number

  @column()
  public professionalId: number

  @column()
  public description: string

  @manyToMany(() => Medicine)
  public medicines: ManyToMany<typeof Medicine>

  @manyToMany(() => Exam)
  public exams: ManyToMany<typeof Exam>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
