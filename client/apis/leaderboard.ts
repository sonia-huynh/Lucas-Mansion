import request from 'superagent'
import { Scores } from '../../models/scores'

const rootUrl = '/api/v1'

export function getLeaderboard(): Promise<string[]> {
  return request.get(rootUrl + '/leaderboard').then((res) => {
    return res.body.leaderboard
  })
}

// post reqeust send player and time

export async function addScores(score: Scores) {
  return request.post(rootUrl + '/scores').send(score)
}
