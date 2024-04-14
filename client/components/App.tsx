import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  useEffect(() => {
    // RegEx will break path into just the words
    const titleWords: RegExpMatchArray | null =
      location.pathname.match(/[a-z]+/gi)
    const newTitle: string | undefined = titleWords
      ?.map((ele) => {
        return ele.charAt(0).toUpperCase() + ele.slice(1)
      })
      .join(' ')
    document.title = newTitle ? `Lucas' Mansion - ${newTitle}` : "Lucas' Mansion - Dinner"
  }, [location])

  return (
    <>
      <div className="app">
        <Outlet />
      </div>
    </>
  )
}

export default App
