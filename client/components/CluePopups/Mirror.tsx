import '../../styles/popup.css'
interface Props {
  setMirror: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Mirror({ setMirror }: Props) {
  return (
    <>
      <h1>Mirror</h1>
      <p>The mirror is dusty but you see your own reflection, are the clues taking you in the right direction?</p>
      <button className="clueCloseButton" onClick={() => setMirror(false)}>
        x
      </button>
    </>
  )
}
