import { useEffect, useState } from "react"
import pathing from "../data/Maze.json"
import {useNavigate} from "react-router-dom"

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
    <img src={`/maze/${pathing[position].image}.png`} alt={`maze orientation ${pathing[position].point}`}/>
    {pathing[position].left && <button onClick={()=>setPosition(pathing[position].left as number)}>left</button>}
    {pathing[position].forward &&<button onClick={()=>setPosition(pathing[position].forward as number)}>forward</button>}
    {pathing[position].right &&<button onClick={()=>setPosition(pathing[position].right as number)}>right</button>}
    {pathing[position].back 
    ? <button onClick={()=>setPosition(pathing[position].back as number)}>back</button> 
    : pathing[position].back === 0 && <button onClick={()=>setPosition(pathing[position].back as number)}>back</button>}
  </>)
    }
}
