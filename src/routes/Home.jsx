import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import SalesOverView from '../components/SalesOverView'
function Home () {
  return (
    <>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='grid p-6 pt-0 gap-4'>
    <Hero/>
    <SalesOverView/>
    </motion.div>
    </>
  )
}

export default Home