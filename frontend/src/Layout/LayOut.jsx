import React from 'react'
import Header from '../Components/Header/Header.jsx'
import Routers from '../Router/Routers.jsx'
import Footer from '../Components/Footer/Footer.jsx'

function LayOut() {
  return (
  <>
  <Header/>
  <main>
    <Routers/>
  </main>

  <Footer/>
  </>
  )
}

export default LayOut