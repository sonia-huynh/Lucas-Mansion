import { Scores } from '../../models/scores.ts'
import db from './connection.ts'

export async function getAllScores() {
  return await db('score').select()
}

//  post request to add player score, need player and time

export async function addScores(score: Scores) {
  return await db('score').insert(score)
}
