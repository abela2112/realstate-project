import { useState } from 'react'

import Home from './pages/home'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Search from './pages/Search'
import SinglePropertyPage from './pages/SinglePropertyPage'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/prop/:id' element={<SinglePropertyPage />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
