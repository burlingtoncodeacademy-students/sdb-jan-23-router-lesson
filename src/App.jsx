import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={ <NotFound /> } />
        <Route path='/' element={ <Home /> } />
        <Route path='/about/:username' element={ <AboutMe /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/mainroute'>
          <Route path='subroute' element={ <AboutMe />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
