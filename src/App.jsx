import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/navBar/NavBar'
import LandingPage from './component/landingPage/LandingPage'
import WhatWe from './component/WhatWe/WhatWe'
import PlatinxImage from './component/platinxImage/PlatinxImage'
import Leader from './component/leader/Leader'
import GlobalSecurity from './component/security/GlobalSecurity'
import CryptoJourney from './component/cryptoJourney/CryptoJourney'
import Footer from './component/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <NavBar/>
     <LandingPage/>
     <WhatWe/>
     <PlatinxImage/>
     <Leader/>
     <GlobalSecurity/>
      <CryptoJourney/>
      <Footer/>
    </>
  )
}

export default App
