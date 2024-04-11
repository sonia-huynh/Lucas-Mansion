import '../../styles/popup.css'

interface Props {
  setMatchingE: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MatchingExample({ setMatchingE }: Props) {
  return (
    <>
      <h1>MatchingE</h1>
      <button className="closeButton" onClick={() => setMatchingE(false)}>
        x
      </button>
    </>
  )
}
