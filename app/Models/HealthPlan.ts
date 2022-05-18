import { column } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'

export default class HealthPlan extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public registrationNumber: number

  @column()
  public name: string
}
