import React from 'react'
import { BrowserRouter,Route,Routes  } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div className="text-center text-2xl"><Navbar/></div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
