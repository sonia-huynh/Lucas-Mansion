import { useEffect } from 'react'
import '../../public/foyer-images/foyer.png'
import '../styles/foyer.css'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Foyer() {
  const navigate = useNavigate()
  useEffect(()=>{
    document.body.style.backgroundImage = "url('/foyer-images/foyer.png')"
  })
  return (<>
  <div className="foyerdoordiv">
  <button className="foyerdoor" onClick={() => navigate("../maze")}>
    <img
      className='foyerdoor'
      src="/foyer-images/foyer-door.png"
      alt="foyer door"
      />
  </button>
</div>
      </>
  )
}
