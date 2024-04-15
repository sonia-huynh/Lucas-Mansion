import { useNavigate } from 'react-router-dom'
import Congrats from './Congrats'
import { useEffect } from 'react'

export default function EndPage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.backgroundImage = "url('/end-page/end-page.png')"
  })

  function handleGoCongrats() {
    navigate('/congrats')
  }
  return (
    <>
      <div>
        <img
          src="/end-page/game-cleared.png"
          alt="game cleared text"
          style={{
            height: '150px',
            position: 'absolute',
            left: '350px',
            top: '300px',
          }}
        />
        <img
          src="/end-page/lucas-face.png"
          alt="lucas' face"
          style={{
            height: '150px',
            position: 'absolute',
            left: '800px',
            top: '500px',
          }}
        />
        <button
          onClick={handleGoCongrats}
          style={{
            position: 'absolute',
            left: '820px',
            top: '700px',
          }}
        >
          go to congrats
        </button>
      </div>
    </>
  )
}
