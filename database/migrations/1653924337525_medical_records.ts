import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MedicalRecords extends BaseSchema {
  protected tableName = 'medical_records'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.text('description', 'longtext').nullable()
      table.integer('weight').unsigned().nullable()
      table.integer('height').unsigned().nullable()
      table.string('bmi').nullable()
      table.integer('diastolicPressure').unsigned().nullable()
      table.integer('systolicPressure').unsigned().nullable()
      table.integer('temperature').unsigned().nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
