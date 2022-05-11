import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

import MedicalRecord from './MedicalRecord'

export default class Medicine extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public substance: string

  @column()
  public producer: string

  @column()
  public concentration: string

  @column()
  public usage: string

  @manyToMany(() => MedicalRecord)
  public medicalRecords: ManyToMany<typeof MedicalRecord>
}
