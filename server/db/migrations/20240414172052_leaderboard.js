/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('leaderboard', (table) => {
    table.integer('id')
    table.string('name')
    table.integer('time')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('leaderboard')
}
