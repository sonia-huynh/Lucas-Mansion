import '../../styles/inventory.css'

interface Props {
  setInventory: React.Dispatch<React.SetStateAction<boolean>>
  map: boolean
  rips: boolean[]
}

export default function Inventory({ setInventory, map, rips }: Props) {
  const mapImgs = ["exit.png","corner1.png","entrance.png"]
  return (
    <>
      <div>
      {map 
      ? <>
          <button>
            <img src={"puzzle-images/full_map.png"} alt={`full map image`}/>
          </button>
          <img src={"puzzle-images/lantern.png"} alt={`lantern image`}/>
        </>
        :<>
        {rips[0] && <img src={`puzzle-images/${mapImgs[0]}`}/>}
        {rips[1] && <img src={`puzzle-images/${mapImgs[1]}`}/>}
        {rips[2] &&<> <img src={`puzzle-images/${mapImgs[2]}`}/>
        <img src={"puzzle-images/lantern.png"} alt={`lantern image`}/></>}
      </>}
      </div>
      <button className="inventoryCloseButton" onClick={() => setInventory(false)}>
        x
      </button>
    </>
  )
}
