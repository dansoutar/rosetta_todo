import { db } from '..'

const initMigrations = async () => {
  await db.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email').unique()
    table.string('password')
  })

  await db.schema.createTable('lists', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users')
    table.string('title')
    table.string('description')
  })

  await db.schema.createTable('items', (table) => {
    table.increments('id').primary()
    table.integer('list_id')
    table.foreign('list_id').references('id').inTable('lists')
    table.string('title')
    table.boolean('done')
  })
}

initMigrations()
