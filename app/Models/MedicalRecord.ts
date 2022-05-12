import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import Attendance from './Attendance'
import Exam from './Exam'
import Medicine from './Medicine'

export default class MedicalRecord extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public attendanceId: number

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Attendance)
  public attendance: BelongsTo<typeof Attendance>

  @manyToMany(() => Medicine)
  public medicines: ManyToMany<typeof Medicine>

  @manyToMany(() => Exam)
  public exams: ManyToMany<typeof Exam>
}
