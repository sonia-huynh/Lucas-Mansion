import '../../styles/popup.css'
import '../../styles/clock.css'

interface Props {
  setClockFace: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ClockFace({ setClockFace }: Props) {
  return (
    <>
      <img
        className="clockimg"
        src="../../../public/clock-face.png"
        alt="inside clock has a lantern and a piece of a puzzle"
      />
      <button
        className="clockFaceCloseButton"
        onClick={() => setClockFace(false)}
      >
        x
      </button>
    </>
  )
}
