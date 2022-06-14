// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'

export default class ReportsController {
  public async getAttendanceType() {
    return await Database.from('attendances').select('type').count('* as total').groupBy('type')
  }

  public async getAttendanceStatus() {
    return await Database.from('attendances').select('status').count('* as total').groupBy('status')
  }
}
