import React from 'react'
// import { Link } from 'react-router-dom'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../components/routes/Home'
import About from '../components/routes/About'
import Contact from '../components/routes/Contact'

const Routing = () => {
    return (
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>
        </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing