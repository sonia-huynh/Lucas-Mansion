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
        src="/clock-face.png"
        alt="inside clock has a lantern and a piece of a puzzle"
      />
      <button
        className="clockFaceCloseButton close"
        onClick={() => setClockFace(false)}
      >
        x
      </button>
    </>
  )
}
