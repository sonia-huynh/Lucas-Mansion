import { useEffect } from 'react'
import '../../public/foyer-images/foyer.png'
import '../styles/foyer.css'

export default function Foyer() {
  useEffect(()=>{
    document.body.style.backgroundImage = "url('/foyer-images/foyer.png')"
  })
  return (<></>
    // <div className="foyer">
    //   <img src="/foyer-images/foyer.png" alt="foyer-background" />
    // </div>
  )
}
