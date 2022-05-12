import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import Attendance from './Attendance'

export default class Professional extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public name: string

  @column()
  public registrationNumber: number

  @column()
  public registrationState: string

  @column()
  public specialty: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  public oldPassword: string

  @column()
  public rememberMeToken?: string

  @column()
  public active: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Attendance, {
    localKey: 'id',
    foreignKey: 'professionalId',
  })
  public attendances: HasMany<typeof Attendance>

  @beforeSave()
  public static async hashPassword(professional: Professional) {
    if (professional.$dirty.password) {
      professional.password = await Hash.make(professional.password)
    }
  }

  public checkPassword(password: string) {
    return Hash.verify(this.password, password)
  }
}
