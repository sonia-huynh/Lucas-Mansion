export interface ScoreDraft {
  name: string
  time: string
}

export interface Scores extends ScoreDraft {
  id: number
}

export interface ScoreNumber {
  id: number
  name: string
  time: number
}
