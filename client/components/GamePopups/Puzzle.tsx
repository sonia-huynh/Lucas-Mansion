import { useState } from 'react'

export default function Puzzle() {
  const [side, setSide] = useState('front')

  function handleSeeBack() {
    setSide('back')
  }
  return (
    <>
      {side === 'front' ? (
        <>
          <img src="/puzzle-images/full_map.png" alt="maze-map" />
          <button onClick={handleSeeBack}>see back</button>
        </>
      ) : (
        <>
          <img
            src="/puzzle-images/back-map.png"
            alt="maze-map"
            style={{ height: '500px' }}
          />
        </>
      )}
    </>
  )
}
