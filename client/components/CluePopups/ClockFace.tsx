import '../../styles/popup.css'
interface Props {
  setClockFace: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ClockFace({ setClockFace }: Props) {
  return (
    <>
      <h1>Clock Face</h1>
      <button className="closeButton" onClick={() => setClockFace(false)}>
        x
      </button>
    </>
  )
}
