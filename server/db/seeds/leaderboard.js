export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()

  // Inserts seed entries
  await knex('leaderboard').insert([
    { id: 1, name: 'lucas', time: 55 },
    { id: 2, name: 'sonia', time: 90 },
    { id: 3, name: 'prash', time: 80 },
    { id: 4, name: 'haruka', time: 80 },
    { id: 5, name: 'darragh', time: 70 },
  ])
}
