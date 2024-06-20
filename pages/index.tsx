import React from 'react'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import Member from '@/Components/Member'
import Footer from '@/Components/Footer'

const index = () => {
  return (
    <div>
      <div className="bg-[url('/img-1.jpg')] bg-cover bg " >  
      <Header/>
    <Hero/>
    <About/>
    </div>
  
    
    <Member/>
    <Footer/>
      
    </div>
  )
}

export default index
