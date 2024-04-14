import '../../styles/popup.css'
interface Props {
  setStool: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Stool({ setStool }: Props) {
  return (
    <>
      <h1>Stool</h1>
      <button className="clueCloseButton" onClick={() => setStool(false)}>
        x
      </button>
    </>
  )
}
