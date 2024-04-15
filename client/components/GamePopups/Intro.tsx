import '../../styles/popup.css'
interface Props {
  setIntro: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Intro({setIntro}:Props) {
  return( <>
  <h2>Welcome!</h2>
  <p>
    {`You've entered Lucas' mansion and now it's a game, the room has been locked and you'll race the clock. 
    Hidden inside are some puzzles and clues, look for a way out or else you'll lose!" `}
  </p>
  <button className="clueCloseButton close" onClick={() => setIntro(false)}>
        x
      </button>
  </>)
}
