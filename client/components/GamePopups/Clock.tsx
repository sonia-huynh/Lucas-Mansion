import '../../styles/clock.css'

interface Props {
  setClock: React.Dispatch<React.SetStateAction<boolean>>
  win: boolean
  setFoundPapers: React.Dispatch<React.SetStateAction<boolean[]>>
  foundPapers: boolean[]
}

export default function Clock({
  setClock,
  win,
  setFoundPapers,
  foundPapers,
}: Props) {
  function collect() {
    const newArr = [...foundPapers]
    newArr[2] = true
    setFoundPapers(newArr)
  }
  return (
    <>
      {win && foundPapers[2] === false ? (
        <>
          <img
            className="clockimg"
            src="/clock-inside-closeup.png"
            alt="inside clock has a lantern and a piece of a puzzle"
          />
          <button onClick={collect}>collect</button>
        </>
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
