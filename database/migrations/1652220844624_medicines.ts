import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medicines extends BaseSchema {
  protected tableName = 'medicines'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('substance').notNullable()
      table.string('producer').notNullable()
      table.string('concentration').notNullable()
      table.string('usage').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
