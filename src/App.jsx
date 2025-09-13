import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/navBar/NavBar'
import LandingPage from './component/landingPage/LandingPage'
import WhatWe from './component/WhatWe/WhatWe'
import PlatinxImage from './component/platinxImage/PlatinxImage'
import Leader from './component/leader/Leader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <NavBar/>
     <LandingPage/>
     <WhatWe/>
     <PlatinxImage/>
     <Leader/>
    </>
  )
}

export default App
