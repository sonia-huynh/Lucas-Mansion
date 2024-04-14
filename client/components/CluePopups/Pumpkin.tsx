import '../../styles/popup.css'
interface Props {
  setPumpkin: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Pumpkin({ setPumpkin }: Props) {
  return (
    <>
      <h1>Pumpkin</h1>
      <p>Hmmm, these three pumpkins look neglected and ready to scrap, you look closer and find hidden is a piece of a map... </p>
      <button className="clueCloseButton" onClick={() => setPumpkin(false)}>
        x
      </button>
    </>
  )
}
