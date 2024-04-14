import db from './connection.ts'
import { Fruit, FruitData } from '../../models/fruit.ts'

export async function getAllScores() {
  return await db('fruit').select()
}

// export async function getFruitById(name: string, time: string) {
//   return await db('leaderboard').insert{ name, time }
// }
