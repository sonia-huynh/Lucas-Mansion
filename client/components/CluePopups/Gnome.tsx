import '../../styles/popup.css'
interface Props {
  setGnome: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Gnome({ setGnome }: Props) {
  return (
    <>
      <h1>Gnome</h1>
      <button className="closeButton" onClick={() => setGnome(false)}>
        x
      </button>
    </>
  )
}
