import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Patients extends BaseSchema {
  protected tableName = 'patients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.integer('socialNumber').unsigned().notNullable()
      table.timestamp('birthday', { useTz: true })
      table.string('gender', 50).notNullable()
      table.string('contact', 50).notNullable()
      table
        .integer('address_id')
        .unsigned()
        .references('id')
        .inTable('addresses')
        .onDelete('CASCADE')
      table
        .integer('health_plan_id')
        .unsigned()
        .references('id')
        .inTable('health_plans')
        .onDelete('CASCADE')
      table.timestamp('healthPlanExpiration', { useTz: true })
      table.boolean('active').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
