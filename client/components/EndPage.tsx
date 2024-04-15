import { useNavigate } from 'react-router-dom'
import Congrats from './Congrats'

export default function EndPage() {
  const navigate = useNavigate()

  function handleGoCongrats() {
    navigate('/congrats')
  }
  return (
    <>
      <div>
        <p>end page</p>
        <button onClick={handleGoCongrats}>go to congrats</button>
      </div>
    </>
  )
}
