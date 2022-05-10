import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'
import HealthPlan from './HealthPlan'

export default class Patient extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public socialNumber: number

  @column()
  public birthday: DateTime

  @column()
  public gender: string

  @column()
  public contact: string

  @column()
  public addressId: number

  @column()
  public healthPlanId: number

  @column()
  public healthPlanExpiration: DateTime

  @column()
  public active: boolean

  @hasOne(() => Address, {
    localKey: 'addressId',
    foreignKey: 'id',
    serializeAs: 'address',
  })
  public address: HasOne<typeof Address>

  @hasOne(() => HealthPlan, {
    localKey: 'healthPlanId',
    foreignKey: 'id',
    serializeAs: 'healthPlan',
  })
  public healthPlan: HasOne<typeof HealthPlan>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
