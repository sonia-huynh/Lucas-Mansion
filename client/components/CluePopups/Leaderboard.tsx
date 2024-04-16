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
        <h1
          style={{
            left: '600px',
            zIndex: '1100',
            position: 'absolute',
            color: 'wheat',
            filter:
              'drop-shadow(1px 1px 0px black) drop-shadow(-1px -1px 0px black) drop-shadow(1px -1px 0px black) drop-shadow(-1px 1px 0px black)',
          }}
        >
          Leaderboard
        </h1>
        <div
          style={{
            left: '150px',
            top: '120px',
            zIndex: '1100',
            position: 'absolute',
            color: 'yellow',
            textAlign: 'left',
            fontSize: '20px',
            filter:
              'drop-shadow(1px 1px 0px black) drop-shadow(-1px -1px 0px black) drop-shadow(1px -1px 0px black) drop-shadow(-1px 1px 0px black)',
          }}
        >
          {scores.map((score: Scores, i: number) => (
            <div key={i} style={{ display: 'flex' }}>
              <>
                <h2
                  style={{
                    marginBottom: '0px',
                    marginBlockStart: '0px',
                    marginBlockEnd: '0px',
                  }}
                >
                  {score.name}
                </h2>
              </>
              {/* <>
                <h2
                  style={{
                    marginBottom: '0px',
                    marginBlockStart: '0px',
                    marginBlockEnd: '0px',
                  }}
                >
                  {score.time}
                </h2>
              </> */}
            </div>
          ))}
        </div>
        <div
          style={{
            left: '350px',
            top: '120px',
            zIndex: '1100',
            position: 'absolute',
            color: 'yellow',
            textAlign: 'left',
            fontSize: '20px',
            filter:
              'drop-shadow(1px 1px 0px black) drop-shadow(-1px -1px 0px black) drop-shadow(1px -1px 0px black) drop-shadow(-1px 1px 0px black)',
          }}
        >
          {scores.map((score: Scores, i: number) => (
            <div key={i} style={{ display: 'flex' }}>
              {/* <h3
                style={{
                  marginBottom: '0px',
                  marginBlockStart: '5px',
                  marginBlockEnd: '2px',
                }}
              >
                {score.time}
              </h3> */}
              <h2
                style={{
                  marginBottom: '0px',
                  marginBlockStart: '0px',
                  marginBlockEnd: '0px',
                }}
              >
                {score.time}
              </h2>
            </div>
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
