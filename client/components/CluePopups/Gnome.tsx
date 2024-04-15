import '../../styles/popup.css'

interface Props {
  setGnome: React.Dispatch<React.SetStateAction<boolean>>
  foundPapers: boolean[]
  setFoundPapers: React.Dispatch<React.SetStateAction<boolean[]>>
}

export default function Gnome({
  setGnome,
  foundPapers,
  setFoundPapers,
}: Props) {
  function handleClick() {
    const newArr = [...foundPapers]
    newArr[0] = true
    setFoundPapers(newArr)
  }

  return (
    <>
      <h1>Gnome</h1>
      <p>{`The gnome's two hands make him look in a daze becuase below its two feet appears to be a piece of a maze...`}</p>
      {foundPapers[0] === false && (
        <>
          <img
            src="puzzle-images/exit.png"
            alt="a puzzle pice"
            style={{ height: '150px' }}
          />
          <br />
          <button onClick={handleClick}>collect</button>
        </>
      )}

      <button
        className="closeButton"
        id="gnome-close"
        onClick={() => setGnome(false)}
      >
        x
      </button>
    </>
  )
}
