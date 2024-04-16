import '../../styles/popup.css'
interface Props {
  setLeaderboard: React.Dispatch<React.SetStateAction<boolean>>
  setBlock: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Leaderboard({ setLeaderboard, setBlock }: Props) {
  function handleClick() {
    setLeaderboard(false)
    setBlock(false)
  }

  return (
    <>
      <h1>Leaderboard</h1>
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
        }}
      />
      <button className="close" onClick={handleClick}>
        x
      </button>
    </>
  )
}
