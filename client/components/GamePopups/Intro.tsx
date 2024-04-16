import '../../styles/popup.css'
// import
interface Props {
  setIntro: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Intro({ setIntro }: Props) {
  return (
    <div style={{ marginTop: '50px' }}>
      <h2>Welcome!</h2>
      <strong>
        <p>
          {`You've entered Lucas' mansion and now it's a game, the room has been locked and you'll race the clock. 
      Hidden inside are some puzzles and clues, look for a way out or else you'll lose!" `}
        </p>
      </strong>
      <button className="close" onClick={() => setIntro(false)}>
        x
      </button>
    </div>
  )
}
