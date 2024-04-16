import { Router } from 'express'
import { addScores, getAllScores } from '../db/leaderboard'
import { ScoreDraft, Scores } from '../../models/scores'

// backend call for get request

const router = Router()

router.get('/', async (req, res) => {
  try {
    const scores = await getAllScores()
    res.json(scores)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching scores' })
  }
})

// backend call for post request takes in player and time

router.post('/add', async (req, res) => {
  try {
    const input = req.body
    const scores = await addScores(input)
    res.json(scores)
  } catch (error) {
    res.status(500).json({ message: 'Error adding scores' })
  }
})

export default router
