import '../../styles/popup.css'
interface Props {
  setChest: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Chest({ setChest }: Props) {
  return (
    <>
      <h1>Chest</h1>
      <p>Within the chest, full of secrets but nil of treasure, lies the key to a certain lock.</p>
      <button className="clueCloseButton close" onClick={() => setChest(false)}>
        x
      </button>
    </>
  )
}
