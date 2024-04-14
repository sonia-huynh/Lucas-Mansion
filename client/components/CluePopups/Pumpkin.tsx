import '../../styles/popup.css'
interface Props {
  setPumpkin: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Pumpkin({ setPumpkin }: Props) {
  return (
    <>
      <h1>Pumpkin</h1>
      <p>Hmmm, these pumpkins look like they have been quite neglected...</p>
      <button className="duckCloseButton" onClick={() => setPumpkin(false)}>
        x
      </button>
    </>
  )
}
