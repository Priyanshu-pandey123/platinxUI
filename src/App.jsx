import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/navBar/NavBar'
import LandingPage from './component/landingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <NavBar/>
     <LandingPage/>
    </>
  )
}

export default App
