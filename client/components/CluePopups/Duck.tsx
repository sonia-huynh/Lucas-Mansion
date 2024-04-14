import '../../styles/popup.css'
interface Props {
  setDuck: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Duck({ setDuck }: Props) {
  return (
    <>
      <h1>Duck</h1>
      <p>
        The duck reminds you of some method where you talk to a rubber ducky to
        explain something step by step...
      </p>
      <button className="duckCloseButton" onClick={() => setDuck(false)}>
        x
      </button>
    </>
  )
}
