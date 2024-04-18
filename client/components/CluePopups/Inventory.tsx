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

export default function Inventory({
  setInventory,
  map,
  rips,
  mapShow,
  setMapShow,
}: Props) {
  const mapImgs = ['exit.png', 'corner1.png', 'entrance.png']

  return (
    <>
      <div className="holderdiv">
        {!rips[0] && !rips[1] && !rips[2] && !mapShow ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ marginTop: '0px' }}>Inventory Items</h2>
            <p style={{ marginTop: '10px' }}>Look for items around the room.</p>
          </div>
        ) : mapShow ? (
          <div className="popup-overlay">
            <div className="map-inv-popup popup">
              <Map setMap={setMapShow} />
            </div>
          </div>
        ) : map ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ marginTop: '0px' }}>Your Items</h2>
            <div>
              <button
                className="spacing"
                id="mapbutt"
                onClick={() => setMapShow(true)}
              >
                <img
                  className="inventoryimg"
                  src={'/puzzle-images/full_map.png'}
                  alt={`full map`}
                />
              </button>
              <img
                className="inventoryimg spacing"
                src={'/puzzle-images/lantern.png'}
                alt={`lantern`}
              />
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ marginTop: '0px' }}>Your Items</h2>
            <div>
              {rips[0] && (
                <img
                  className="inventoryimg spacing"
                  src={`/puzzle-images/${mapImgs[0]}`}
                  alt="puzzle piece"
                />
              )}
              {rips[1] && (
                <img
                  className="inventoryimg spacing"
                  src={`/puzzle-images/${mapImgs[1]}`}
                  alt="puzzle piece"
                />
              )}
              {rips[2] && (
                <>
                  <img
                    className="inventoryimg spacing"
                    src={`/puzzle-images/${mapImgs[2]}`}
                    alt="puzzle piece"
                  />
                  <img
                    className="inventoryimg spacing"
                    src={'/puzzle-images/lantern.png'}
                    alt={`lantern`}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <button className="close" onClick={() => setInventory(false)}>
        x
      </button>
    </>
  )
}
