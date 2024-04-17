export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()

  // Inserts seed entries
  await knex('leaderboard').insert([
    { id: 1, name: 'lucas', time: 55 },
    { id: 2, name: 'sonia', time: 85 },
    { id: 3, name: 'prash', time: 94 },
    { id: 4, name: 'haruka', time: 87 },
    { id: 5, name: 'darragh', time: 90 },
    { id: 6, name: 'koda', time: 45 },
  ])
}
