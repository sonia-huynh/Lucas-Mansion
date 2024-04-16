export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()

  // Inserts seed entries
  await knex('leaderboard').insert([
    { id: 1, name: 'lucas', time: '1hr 13min 08sec' },
    { id: 2, name: 'sonia', time: '1hr 53min 37sec' },
    { id: 3, name: 'prash', time: '1hr 30min 42sec' },
    { id: 4, name: 'haruka', time: '1hr 28min 08sec' },
    { id: 5, name: 'darragh', time: '1hr 03min 08sec' },
  ])
}
