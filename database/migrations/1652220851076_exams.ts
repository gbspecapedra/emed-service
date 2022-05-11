import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Exams extends BaseSchema {
  protected tableName = 'exams'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.text('description', 'mediumtext').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
