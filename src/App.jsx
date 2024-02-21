import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Navbar from './components/NavBar'
import { BarSide } from './components/BarSide'
import PagoTc from './routes/PagoTc'
import Notfound from './routes/NotFound.jsx'
import CompraRetiro from './routes/CompraRetiro.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import { AnimatePresence } from 'framer-motion'

function App (isVisible) {
  return (
    <>
      <Router>
        <Navbar />
        
        <BarSide/>
        <AnimatePresence>
        <div className='xl:ml-[280px]'>
        {isVisible && (
        <Routes location={location} key={location.path}>
          <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home/>} />
          <Route path='/tc_payment' element={<PagoTc/>} />
          <Route path='/pucharse_withdrawal' element={<CompraRetiro/>} />
          <Route path='*' element={<Notfound/>} />
          </Route>
          <Route path='/login' element={'Iniciar Sesion'} />
        </Routes>
        )}
        </div>
        </AnimatePresence>
      </Router>
    </>
  )
}

export default App
