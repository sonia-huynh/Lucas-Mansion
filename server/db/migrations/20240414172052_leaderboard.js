/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('leaderboard', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.string('time')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('leaderboard')
}
