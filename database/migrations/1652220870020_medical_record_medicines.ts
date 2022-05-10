import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MedicalRecordMedicines extends BaseSchema {
  protected tableName = 'medical_record_medicine'

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
        .integer('medicine_id')
        .unsigned()
        .index('medicine_id')
        .references('id')
        .inTable('medicines')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
