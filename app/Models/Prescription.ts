import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import MedicalRecord from './MedicalRecord'

export default class Prescription extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public medicalRecordId: number

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => MedicalRecord, {
    serializeAs: 'medicalRecord',
  })
  public medicalRecord: BelongsTo<typeof MedicalRecord>
}
