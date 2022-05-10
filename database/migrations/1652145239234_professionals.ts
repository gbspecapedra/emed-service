import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProfessionalsSchema extends BaseSchema {
  protected tableName = 'professionals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('type', 8).notNullable()
      table.string('name', 255).notNullable()
      table.integer('registration_number').unsigned().notNullable()
      table.string('registration_state', 2).notNullable()
      table.string('specialty', 255).notNullable()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.boolean('active').notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
