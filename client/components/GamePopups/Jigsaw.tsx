import '../../styles/popup.css'

interface Props {
  setJigsaw: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Jigsaw({ setJigsaw }: Props) {
  return (
    <>
      <h1>Jigsaw</h1>
      <button className="closeButton" onClick={() => setJigsaw(false)}>
        x
      </button>
    </>
  )
}
