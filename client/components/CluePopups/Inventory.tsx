import { useState } from 'react'
import '../../styles/inventory.css'
import '../../styles/popup.css'
import Map from '../GamePopups/Map'

interface Props {
  setInventory: React.Dispatch<React.SetStateAction<boolean>>
  map: boolean
  rips: boolean[]
  mapShow: boolean
  setMapShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Inventory({ setInventory, map, rips, mapShow, setMapShow }: Props) {
  const mapImgs = ["exit.png","corner1.png","entrance.png"]
  
  return (
    <>
      <div className='holderdiv'>
      {mapShow 
      ?
        (
          <div className="popup-overlay">
            <div className="map-inv-popup popup">
              <Map setMap={setMapShow} />
            </div>
          </div>
        )
        
      : map 
      ? <>
          <button className='spacing mapbutt' onClick={()=>setMapShow(true)}>
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
      <button className="close" onClick={() => setInventory(false)}>
        x
      </button>
    </>
  )
}
