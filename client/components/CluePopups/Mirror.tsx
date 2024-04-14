import '../../styles/popup.css'
interface Props {
  setMirror: React.Dispatch<React.SetStateAction<boolean>>
  setFoundPaper: React.Dispatch<React.SetStateAction<boolean[]>>
  foundPapers: boolean
}

export default function Mirror({
  setMirror,
  setFoundPaper,
  foundPapers,
}: Props) {
  // setFoundPaper(false)
  function collect() {
    const newArr = [...foundPapers]
    newArr[1] = true
    setFoundPaper(newArr)
  }
  return (
    <>
      <h1>Mirror</h1>
      {foundPapers ? (
        <p>
          The mirror is dusty but you see your own reflection, are the clues
          taking you in the right direction?
        </p>
      ) : (
        <>
          <p>
            The mirror is dusty but you see your own reflection, are the clues
            taking you in the right direction?
          </p>

          <img
            src="puzzle-images/corner1.png"
            alt="piece 1 of a map"
            style={{ height: '150px' }}
          />
          <br></br>
          <button onClick={collect}>collect</button>
        </>
      )}
      <button className="mapCloseButton" onClick={() => setMirror(false)}>
        x
      </button>
    </>
  )
}
