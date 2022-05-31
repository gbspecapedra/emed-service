import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MedicalRecordExams extends BaseSchema {
  protected tableName = 'medical_record_exam'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('medical_record_id')
        .unsigned()
        .index('medical_record_id')
        .references('id')
        .inTable('medical_records')
        .onDelete('CASCADE')
      table
        .integer('exam_id')
        .unsigned()
        .index('exam_id')
        .references('id')
        .inTable('exams')
        .onDelete('CASCADE')
      table.text('result', 'longtext').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
