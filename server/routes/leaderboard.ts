import { Router } from 'express'
import { addScores, getAllScores } from '../db/leaderboard'

// backend call for get request

const router = Router()

router.get('/', async (req, res) => {
  try {
    const scores = await getAllScores()
    res.json(scores)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

// backend call for post request takes in player and time

router.post('/add', async (req, res) => {
  try {
    const input: number = req.body.score
    const scores = await addScores(input)
    res.json(scores)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

// calculations for time

export default router
