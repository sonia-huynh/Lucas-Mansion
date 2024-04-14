import '../../styles/popup.css'
interface Props {
  setPumpkin: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Pumpkin({ setPumpkin }: Props) {
  return (
    <>
      <h1>Pumpkin</h1>
      <button className="closeButton" onClick={() => setPumpkin(false)}>
        x
      </button>
    </>
  )
}
