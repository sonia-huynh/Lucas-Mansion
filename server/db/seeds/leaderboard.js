export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()

  // Inserts seed entries
  await knex('leaderboard').insert([
    { id: 1, name: 'lucas', time: '13min 08sec' },
    { id: 2, name: 'sonia', time: '53min 37sec' },
    { id: 3, name: 'prash', time: '30min 42sec' },
    { id: 4, name: 'haruka', time: '0min 08sec' },
    { id: 5, name: 'darragh', time: '03min 08sec' },
  ])
}
