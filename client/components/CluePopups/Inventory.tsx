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
      <div className='holderdiv'>
      {map 
      ? <>
          <button className='spacing'>
            <img className='inventoryimg'src={"puzzle-images/full_map.png"} alt={`full map image`}/>
          </button>
          <img  className='inventoryimg spacing'src={"puzzle-images/lantern.png"} alt={`lantern image`}/>
        </>
        :<>
        {rips[0] && <img  className='inventoryimg spacing'src={`puzzle-images/${mapImgs[0]}`}/>}
        {rips[1] && <img  className='inventoryimg spacing' src={`puzzle-images/${mapImgs[1]}`}/>}
        {rips[2] &&<> <img  className='inventoryimg spacing'src={`puzzle-images/${mapImgs[2]}`}/>
        <img  className='inventoryimg spacing'src={"puzzle-images/lantern.png"} alt={`lantern image`}/></>}
      </>}
      </div>
      <button className="inventoryCloseButton close" onClick={() => setInventory(false)}>
        x
      </button>
    </>
  )
}
