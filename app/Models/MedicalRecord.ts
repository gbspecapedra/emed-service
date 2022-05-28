import {
  BelongsTo,
  belongsTo,
  column,
  HasOne,
  hasOne,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'

import Attendance from './Attendance'
import Exam from './Exam'
import Medicine from './Medicine'

export default class MedicalRecord extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public attendanceId: number

  @column()
  public description: string | null

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
