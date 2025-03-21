import React from 'react'
import Header from '../compoment/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../compoment/Footer'
import Sidebar from '../compoment/Sidebar'
import Banner from '../compoment/Banner'
import Categoryes from '../compoment/Categoryes'
import ThisMonth from '../compoment/ThisMonth'
import Featured from '../compoment/Featured'
import C3footer from '../compoment/C3footer'

const Client = () => {
  return (
    <div className='w-[1200px] mx-auto'>
      <Header/>
      <div className='flex w-[1200px]'  >
          <div className=''>
            <Sidebar/>
          </div>
          <div className='w-[900px] ml-5 mt-5'>
            <Banner/>
          </div>
      </div>
        <Categoryes/>
        <ThisMonth/>
        <main>
          <Outlet/>
        </main>
        <Featured/>
        <C3footer/>
      <Footer/>
    </div>
  )
}

export default Client