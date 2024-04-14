import '../../styles/popup.css'

interface Props {
  setChandelier: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Chandelier({ setChandelier }: Props) {
  return (
    <>
      <h1>Chandelier</h1>
      <p>What a nice and fancy chandelier.</p>
      <button className="duckCloseButton" onClick={() => setChandelier(false)}>
        x
      </button>
    </>
  )
}
