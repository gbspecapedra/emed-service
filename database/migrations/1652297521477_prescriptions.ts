import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Prescriptions extends BaseSchema {
  protected tableName = 'prescriptions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('medical_record_id')
        .unsigned()
        .references('id')
        .inTable('medical_records')
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
