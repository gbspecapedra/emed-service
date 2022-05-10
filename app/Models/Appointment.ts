import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import Patient from './Patient'
import Professional from './Professional'

export default class Appointment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public patientId: number

  @column()
  public professionalId: number

  @column()
  public date: DateTime

  @belongsTo(() => Patient, {
    localKey: 'id',
    foreignKey: 'patientId',
    serializeAs: 'patient',
  })
  public patient: BelongsTo<typeof Patient>

  @hasOne(() => Professional, {
    localKey: 'professionalId',
    foreignKey: 'id',
    serializeAs: 'professional',
  })
  public professional: HasOne<typeof Professional>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
