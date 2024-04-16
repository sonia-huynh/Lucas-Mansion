import '../../styles/matching.css'
import '../../styles/popup.css'

interface Props {
  setMatchingE: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MatchingE({ setMatchingE }: Props) {
  return (
    <div className="match-up-game">
      <div className="plate-game" id="plate-example">
        <div>
          <button className="close" onClick={() => setMatchingE(false)}>
            x
          </button>
        </div>
      </div>
    </div>
  )
}
