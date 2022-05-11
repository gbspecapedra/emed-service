import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Patients extends BaseSchema {
  protected tableName = 'patients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.integer('social_number').unsigned().notNullable().unique()
      table.timestamp('birthday', { useTz: true }).notNullable()
      table.string('gender', 50).notNullable()
      table.string('contact', 50).notNullable()
      table.string('zipcode', 50).notNullable()
      table.string('street').notNullable()
      table.integer('number').nullable()
      table.string('complement').nullable()
      table.string('county', 180).notNullable()
      table.string('city', 180).notNullable()
      table.string('state', 50).notNullable()
      table.string('country', 180).notNullable()
      table
        .integer('health_plan_id')
        .unsigned()
        .references('id')
        .inTable('health_plans')
        .onDelete('CASCADE')
      table.timestamp('health_plan_expiration', { useTz: true }).nullable()
      table.boolean('active').notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
