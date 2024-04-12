import '../../styles/matching-example.css'
import '../../styles/popup.css'

interface Props {
  setMatching: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Matching({ setMatching }: Props) {
  return (
    <div className="match-up-game">
      <div className="plate-game">
        <div>
          <button className="closeButton" onClick={() => setMatching(false)}>
            x
          </button>
        </div>
      </div>
    </div>
  )
}
