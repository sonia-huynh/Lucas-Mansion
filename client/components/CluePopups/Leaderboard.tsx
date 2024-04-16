import '../../styles/popup.css'
interface Props {
  setLeaderboard: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Leaderboard({ setLeaderboard }: Props) {
  return (
    <>
      <h1>Leaderboard</h1>
      <button className="closeButton" onClick={() => setLeaderboard(false)}>
        x
      </button>
    </>
  )
}
