import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProfessionalsSchema extends BaseSchema {
  protected tableName = 'professionals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('type', 15).notNullable()
      table.string('name').notNullable()
      table.integer('registration_number').unsigned().nullable().unique()
      table.string('registration_state', 2).nullable()
      table.string('specialty').nullable()
      table.string('email').notNullable().unique()
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
