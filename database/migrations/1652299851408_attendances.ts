import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Attendances extends BaseSchema {
  protected tableName = 'attendances'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('type', 180).notNullable()
      table
        .integer('professional_id')
        .unsigned()
        .references('id')
        .inTable('professionals')
        .onDelete('CASCADE')
      table
        .integer('patient_id')
        .unsigned()
        .references('id')
        .inTable('patients')
        .onDelete('CASCADE')
      table.timestamp('date', { useTz: true }).notNullable()
      table.string('status', 180).notNullable()
      table.string('cancellation_reason').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
