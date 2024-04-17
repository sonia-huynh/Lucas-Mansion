export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()

  // Inserts seed entries
  await knex('leaderboard').insert([
    { id: 1, name: 'LUCAS', time: 1278 },
    { id: 2, name: 'SONIA', time: 1312 },
    { id: 3, name: 'PRASH', time: 1245 },
    { id: 4, name: 'HARUKA', time: 1212 },
    { id: 5, name: 'DARRAGH', time: 1345 },
    { id: 6, name: 'KODA', time: 1423 },
  ])
}
