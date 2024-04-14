import '../../styles/clock.css'

interface Props {
  setClock: React.Dispatch<React.SetStateAction<boolean>>
  win: boolean
}

export default function Clock({ setClock, win }: Props) {
  return (
    <>
      {win ? (
        <img
          className="clockimg"
          src="/clock-inside-closeup.png"
          alt="inside clock has a lantern and a piece of a puzzle"
        />
      ) : (
        <img
          className="clockimg"
          src="/clock-inside-empty.png"
          alt="insid of clock is empty"
        />
      )}

      <button className="clockBodCloseButton" onClick={() => setClock(false)}>
        x
      </button>
    </>
  )
}
