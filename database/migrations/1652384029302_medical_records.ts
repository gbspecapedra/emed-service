import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MedicalRecords extends BaseSchema {
  protected tableName = 'medical_records'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('attendance_id')
        .unsigned()
        .references('id')
        .inTable('attendances')
        .onDelete('CASCADE')
      table.text('description', 'longtext').notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
