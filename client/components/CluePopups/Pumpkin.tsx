import '../../styles/popup.css'
interface Props {
  setPumpkin: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Pumpkin({ setPumpkin }: Props) {
  return (
    <>
      <h1>Pumpkin</h1>
      <p>Hmmm, these three pumpkins look quite neglected... </p>
      <button className="clueCloseButton" onClick={() => setPumpkin(false)}>
        x
      </button>
    </>
  )
}
