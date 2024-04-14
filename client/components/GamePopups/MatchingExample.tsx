import '../../styles/matching-example.css'
import '../../styles/popup.css'

interface Props {
  setMatchingE: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MatchingE({ setMatchingE }: Props) {
  return (
    <div className="match-up-game">
      <div className="plate-example">
        <div>
          <button className="closeButton" onClick={() => setMatchingE(false)}>
            x
          </button>
        </div>
      </div>
    </div>
  )
}
