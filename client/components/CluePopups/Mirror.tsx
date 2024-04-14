import '../../styles/popup.css'
interface Props {
  setMirror: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Mirror({ setMirror }: Props) {
  return (
    <>
      <h1>Mirror</h1>
      <button className="closeButton" onClick={() => setMirror(false)}>
        x
      </button>
    </>
  )
}
