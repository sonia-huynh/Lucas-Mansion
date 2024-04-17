export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()

  // Inserts seed entries
  await knex('leaderboard').insert([
    { id: 1, name: 'LUCAS', time: 55 },
    { id: 2, name: 'SONIA', time: 85 },
    { id: 3, name: 'PRASH', time: 94 },
    { id: 4, name: 'HARUKA', time: 87 },
    { id: 5, name: 'DARRAGH', time: 90 },
    { id: 6, name: 'KODA', time: 45 },
  ])
}
