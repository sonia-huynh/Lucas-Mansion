import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Congrats from './components/Congrats.tsx'
import Dinner from './components/Dinner.tsx'
import Foyer from './components/Foyer.tsx'
import Maze from './components/Maze.tsx'
import StartPage from './components/StartPage.tsx'
import EndPage from './components/EndPage.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<StartPage />} />
    <Route path="dining-room" element={<Dinner />} />
    <Route path="congrats" element={<Congrats />} />
    <Route path="foyer" element={<Foyer />} />
    <Route path="maze" element={<Maze />} />
    <Route path="end-page" />
  </Route>,
)
