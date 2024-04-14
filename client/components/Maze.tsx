import { useEffect, useState } from "react"
import pathing from "../data/Maze.json"
import {useNavigate} from "react-router-dom"
import "../styles/maze.css"

export default function Maze() {
  const [position, setPosition] = useState(0)
  const navigate = useNavigate()
  useEffect(()=>{
    if (position === 100){
      navigate("/congrats")
    }
  },[position])

  if (pathing){
    return (<>
    <img src={`/maze/routes/${pathing[position].image}.png`} alt={`maze orientation ${pathing[position].point}`}/>
    {pathing[position].left && <button className="left direction" onClick={()=>setPosition(pathing[position].left as number)}><img src="/maze/directions/left.png" alt="left"/></button>}
    {pathing[position].forward &&<button className="forward direction" onClick={()=>setPosition(pathing[position].forward as number)}><img src="/maze/directions/forward.png" alt="forward"/></button>}
    {pathing[position].right &&<button className="right direction" onClick={()=>setPosition(pathing[position].right as number)}><img src="/maze/directions/right.png" alt="right"/></button>}
    {pathing[position].back 
    ? <button className="back direction" onClick={()=>setPosition(pathing[position].back as number)}><img src="/maze/directions/back.png" alt="back"/></button> 
    : pathing[position].back === 0 && <button className="back direction" onClick={()=>setPosition(pathing[position].back as number)}><img src="/maze/directions/back.png" alt="back"/></button>}
  </>)
    }
}
