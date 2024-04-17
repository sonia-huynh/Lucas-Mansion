import { Router } from 'express'
import { addScores, getAllScores } from '../db/leaderboard'

// backend call for get request

const router = Router()

router.get('/', async (req, res) => {
  try {
    const scores = await getAllScores()

    const newScores = scores.map((score) => {
      const time = score.time
      const newMin = Math.floor(time / 60)
      const newSec = time % 60
      const newTime = `${newMin}min ${newSec}sec`
      return { ...score, time: newTime }
    })

    res.json(newScores)
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
