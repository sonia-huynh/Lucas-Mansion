import '../../styles/popup.css'
interface Props {
  setMirror: React.Dispatch<React.SetStateAction<boolean>>
  setFoundPapers: React.Dispatch<React.SetStateAction<boolean[]>>
  foundPapers: boolean[]
}

export default function Mirror({
  setMirror,
  setFoundPapers,
  foundPapers,
}: Props) {
  function collect() {
    const newArr = [...foundPapers]
    newArr[1] = true
    setFoundPapers(newArr)
  }
  return (
    <>
      <h1>Mirror</h1>
      {foundPapers[1] === true ? (
        <p>Through the looking glass, this map piece will help you to pass.</p>
      ) : (
        <>
          <p>
            Through the looking glass, this map piece will help you to pass.
          </p>

          <img
            src="puzzle-images/corner1.png"
            alt="piece 1 of a map"
            style={{ height: '150px' }}
          />
          <br></br>
          <button onClick={collect}>Collect piece</button>
        </>
      )}
      <button className="close" onClick={() => setMirror(false)}>
        x
      </button>
    </>
  )
}
