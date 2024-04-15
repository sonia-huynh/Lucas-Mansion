import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StartPage() {
  const navigate = useNavigate()
  useEffect(() => {
    document.body.style.backgroundImage = "url('/start-game/start-page.png')"
  })

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  function handleClick() {
    navigate('/dining-room')
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <img
      src="/start-game/start-game-brush.png"
      alt="start game button"
      style={{
        height: '100px',
        position: 'absolute',
        left: '700px',
        top: '750px',
        filter: isHovered
          ? 'drop-shadow(1px 1px 0  #fff9b8) drop-shadow(-1px -1px 0  #fff9b8) drop-shadow(1px -1px 0  #fff9b8) drop-shadow(-1px 1px 0  #fff9b8)'
          : 'none',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    />
  )
}
