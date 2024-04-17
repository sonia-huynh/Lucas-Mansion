import { ScoreDraft } from '../../models/scores.ts'
import db from './connection.ts'

export async function getAllScores() {
  const scores = await db('leaderboard').select()

  const newScores = scores.sort((a, b) => a.time - b.time)

  return newScores
}

export async function addScores(score: ScoreDraft) {
  return await db('leaderboard').insert(score)
}
