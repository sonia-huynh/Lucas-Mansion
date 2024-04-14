import '../../styles/popup.css'
interface Props {
  setStool: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Stool({ setStool }: Props) {
  return (
    <>
      <h1>Stool</h1>
      <p>A fallen stool with four legs askew, in the quiet room, it lies, subdued...</p>
      <button className="clueCloseButton" onClick={() => setStool(false)}>
        x
      </button>
    </>
  )
}
