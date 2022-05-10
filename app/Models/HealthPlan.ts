import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class HealthPlan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public registrationNumber: number

  @column()
  public name: string
}
