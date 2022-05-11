import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class HealthPlans extends BaseSchema {
  protected tableName = 'health_plans'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('registration_number').unsigned().notNullable().unique()
      table.string('name').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
