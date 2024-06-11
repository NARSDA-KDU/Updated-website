import React from 'react'

const Hero = () => {
  return (
    <>
 
            <section className=" ">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">Welcome to NARSDA CLUB <span className="text-[#2c7e27]" >A Space in space </span> </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">The ICRC was established to regulate Public Private Partnership (PPP) endeavours of the Federal government aimed at addressing Nigeria’s.</p>
           
            <a href="https://www.youtube.com/channel/UCBAkvJn6xxlhCppcE5zsJVg" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                What we do
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:px-5 lg:col-span-5 lg:flex">
       
            <div>
            <img src="/"  alt="mockup"/>
            </div>
            
        </div>                
    </div>
</section>


</>
    )
}

export default Hero
