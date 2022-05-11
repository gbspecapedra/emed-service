import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import Professional from './Professional'

export default class Attendance extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public medicalRecordId: number

  @column()
  public professionalId: number

  @column.dateTime()
  public date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Professional, {
    localKey: 'professionalId',
    foreignKey: 'id',
  })
  public professional: HasOne<typeof Professional>
}
