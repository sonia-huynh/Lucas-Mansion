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
  // const piece1 = 'puzzle-images/entrance.png'
  // const piece2 = 'puzzle-images/corner1.png'
  // const piece3 = 'puzzle-images/exit.png'

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
            alt="puzzle pice"
            style={{ height: '150px' }}
          />
          <br />
          <br />
          <button onClick={handleClick}>collect piece</button>
        </>
      )}

      <button
        className={foundPapers[0] ? 'clueCloseButton ' : 'pieceCloseButton'}
        onClick={() => setGnome(false)}
      >
        x
      </button>
    </>
  )
}
