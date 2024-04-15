import '../../styles/popup.css'

interface Props {
  setChandelier: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Chandelier({ setChandelier }: Props) {
  return (
    <>
      <h1>Chandelier</h1>
      <p>The fancy chandelier twinkles and shines. The lights so bright they look dressed to the nines.</p>
      <button className="clueCloseButton close" onClick={() => setChandelier(false)}>
        x
      </button>
    </>
  )
}
