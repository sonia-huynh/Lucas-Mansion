import { useLeaderboard } from '../../hooks/useLeaderboard'
import '../../styles/popup.css'
import { Scores } from '../../../models/scores'
interface Props {
  setLeaderboard: React.Dispatch<React.SetStateAction<boolean>>
  setBlock: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Leaderboard({ setLeaderboard, setBlock }: Props) {
  function handleClick() {
    setLeaderboard(false)
    setBlock(false)
  }
  const { data: scores, isLoading, isError } = useLeaderboard()
  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Sorry you are experiencing an error</h1>
  if (scores) {
    console.log(scores)
    return (
      <>
        <h1 style={{ left: '600px', zIndex: '1100', position: 'absolute' }}>
          Leaderboard
        </h1>
        <div
          style={{
            left: '350px',
            top: '200px',
            zIndex: '1100',
            position: 'absolute',
          }}
        >
          {scores.map((score: Scores, i: number) => (
            <h2 key={i}>{score.name}</h2>
          ))}
        </div>
        <img
          src="/end-page/leaderboard-background.png"
          alt=""
          style={{
            margin: '0px',
            padding: '0px',
            top: '10px',
            right: '12px',
            position: 'absolute',
            height: '98%',
            width: '98%',
            zIndex: '10',
          }}
        />
        <button
          className="close"
          onClick={handleClick}
          style={{ zIndex: '11' }}
        >
          x
        </button>
      </>
    )
  }
}
