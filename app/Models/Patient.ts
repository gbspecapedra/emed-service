import {
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  HasOne,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'

import Attendance from './Attendance'
import HealthPlan from './HealthPlan'

export default class Patient extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public socialNumber: number

  @column.dateTime()
  public birthday: DateTime

  @column()
  public gender: string

  @column()
  public contact: string

  @column()
  public zipcode: string

  @column()
  public street: string

  @column()
  public number?: number

  @column()
  public complement?: string

  @column()
  public county: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public country: string

  @column()
  public healthPlanId?: number

  @column.dateTime()
  public healthPlanExpiration?: DateTime

  @column()
  public active: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Attendance, {
    localKey: 'id',
    foreignKey: 'patientId',
  })
  public attendances: HasMany<typeof Attendance>

  @belongsTo(() => HealthPlan)
  public healthPlan: BelongsTo<typeof HealthPlan>
}
