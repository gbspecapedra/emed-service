import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import Patient from './Patient'
import Professional from './Professional'

export default class Attendance extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public professionalId: number

  @column()
  public patientId: number

  @column.dateTime()
  public date: DateTime

  @column()
  public status: string

  @column()
  public cancellationReason: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Patient, {
    localKey: 'patientId',
    foreignKey: 'id',
  })
  public patient: HasOne<typeof Patient>

  @hasOne(() => Professional, {
    localKey: 'professionalId',
    foreignKey: 'id',
  })
  public professional: HasOne<typeof Professional>
}
