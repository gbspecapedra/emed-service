import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('street', 255).notNullable()
      table.integer('number').unsigned().nullable()
      table.string('complement', 255).nullable()
      table.string('neighborhood', 180).notNullable()
      table.string('city', 180).notNullable()
      table.string('state', 2).notNullable()
      table.string('country', 180).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
