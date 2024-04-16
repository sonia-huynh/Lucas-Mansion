import request from 'superagent'
import { ScoreDraft } from '../../models/scores'

const rootUrl = '/api/v1'

export function getLeaderboard(): Promise<string[]> {
  return request.get(rootUrl + '/leaderboard').then((res) => {
    return res.body.leaderboard
  })
}

// post reqeust send player and time

export async function addScores(score: ScoreDraft) {
  try {
    const res = await request.post(rootUrl + '/leaderboard/add').send(score)
    return res.body
  } catch (e) {
    console.error(e)
    // 'you are encountering an error'
  }
}
