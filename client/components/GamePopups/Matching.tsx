import '../../styles/matching.css'

interface Props {
  setMatching: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Matching({ setMatching }: Props) {
  return (
    <>
      <h1>Matching</h1>
      <button onClick={() => setMatching(false)}>Close</button>
      <div className="matching">
        <div className="item">
          <p>small fork</p>
          <button>{'>'}</button>
        </div>
        <div className="item">
          <p>BIG fork</p>
        </div>
      </div>
    </>
  )
}
