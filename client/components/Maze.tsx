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
    <h1>{pathing[position].point}</h1>
    {pathing[position].left && <button onClick={()=>setPosition(pathing[position].left)}>left</button>}
    {pathing[position].forward &&<button onClick={()=>setPosition(pathing[position].forward)}>forward</button>}
    {pathing[position].right &&<button onClick={()=>setPosition(pathing[position].right)}>right</button>}
    {pathing[position].back &&<button onClick={()=>setPosition(pathing[position].back)}>back</button>}
  </>)
    }
}
