import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medicines extends BaseSchema {
  protected tableName = 'medicines'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.string('substance', 255).notNullable()
      table.string('producer', 255).notNullable()
      table.string('concentration', 255).notNullable()
      table.string('usage', 255).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
