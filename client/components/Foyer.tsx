import { useEffect } from 'react'
import '../styles/foyer.css'

export default function Foyer() {
  useEffect(() => {
    document.body.style.backgroundImage = "url('/foyer-images/foyer.png')"
  })
  return <></>
}
