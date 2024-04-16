import { ScoreDraft, Scores } from '../../models/scores.ts'
import db from './connection.ts'

export async function getAllScores() {
  return await db('leaderboard').select()
}

//  post request to add player score, need player and time

export async function addScores(score: ScoreDraft) {
  return await db('leaderboard').insert(score)
}
