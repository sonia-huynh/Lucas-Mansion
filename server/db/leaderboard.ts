import { ScoreDraft, Scores } from '../../models/scores.ts'
import db from './connection.ts'

export async function getAllScores() {
  const scores = await db('leaderboard').select()

  const newScores = scores.sort((a, b) => b.score - a.score)

  return newScores

  // const time = input.time
  // const newMin = Math.floor(time / 60)
  // const newSec = time % 60
  // const newTime = `${newMin}min ${newSec}sec`
  // const newScore = { ...input, time: newTime }
}

//  post request to add player score, need player and time

export async function addScores(score: ScoreDraft) {
  return await db('leaderboard').insert(score)
}
