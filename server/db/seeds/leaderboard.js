export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()

  // Inserts seed entries
  await knex('leaderboard').insert([
    { id: 1, name: 'lucas', time:"1hr 13min 08sec" },
  ])
}
