import React from 'react'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import Member from '@/Components/member'

const index = () => {
  return (
    <div>
      <div className="bg-[url('/img.jpg')] bg-cover bg " >  <Header/>
    <Hero/>
    </div>
  
    <About/>
    <Member/>
      
    </div>
  )
}

export default index
