import '../../styles/popup.css'
interface Props {
  setDuck: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Duck({ setDuck }: Props) {
  return (
    <>
      <h1>Duck</h1>
      <button className="closeButton" onClick={() => setDuck(false)}>
        x
      </button>
    </>
  )
}
