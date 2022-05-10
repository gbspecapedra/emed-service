import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MedicalRecords extends BaseSchema {
  protected tableName = 'medical_records'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('patient_id')
        .unsigned()
        .references('id')
        .inTable('patients')
        .onDelete('CASCADE')
      table
        .integer('professional_id')
        .unsigned()
        .references('id')
        .inTable('professionals')
        .onDelete('CASCADE')
      table.string('description', 255).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
