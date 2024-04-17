import '../../styles/popup.css'
interface Props {
  setStopper: React.Dispatch<React.SetStateAction<boolean>>
  foundPapers: boolean
}

export default function Stopper({ setStopper, foundPapers }: Props) {
  return (
    <>
      {foundPapers
      ?<p style={{position:"absolute", top: "65px", left:"5px"}}>
        These pieces look like they're important, I should probbaly do something with them
      </p>
      :<p style={{position:"absolute", top: "65px", left:"5px"}}>
        The room up ahead is dark, maybe there's a light source in this room you can use
      </p>}
      <button className="close" onClick={() => setStopper(false)}>
        x
      </button>
    </>
  )
}
