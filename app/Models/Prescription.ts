import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Prescription extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public medicalRecordId: number

  @column()
  public description: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
