import '../../styles/popup.css'
interface Props {
  setGnome: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Gnome({ setGnome }: Props) {
  return (
    <>
      <h1>Gnome</h1>
      <p>{`The gnome's two hands make him look in a daze becuase below its two feet appears to be a piece of a maze...`}</p>
      <button className="clueCloseButton" onClick={() => setGnome(false)}>
        x
      </button>
    </>
  )
}
