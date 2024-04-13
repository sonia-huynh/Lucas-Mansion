import '../../styles/popup.css'
interface Props {
  setChest: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Chest({ setChest }: Props) {
  return (
    <>
      <h1>Chest</h1>
      <button className="closeButton" onClick={() => setChest(false)}>
        x
      </button>
    </>
  )
}
