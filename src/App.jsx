import { useState } from 'react'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import Trending from './components/Trending'
import './App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <MainContent/>
      <Trending/>
    </div> 
  )
}

export default App
