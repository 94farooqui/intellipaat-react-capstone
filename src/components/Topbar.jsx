import React from 'react'
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='w-screen bg-gray-900'>
        <div className='w-[1280px] mx-auto py-2 flex justify-between'>
            <div className='flex-1 flex gap-4 items-center'>

            <Link to='/'><h1 className='text-white font-bold text-2xl'>Fake-Splash</h1></Link>
            
            </div>
            <div className='flex-1'>
            <Searchbar/>

            </div>
        </div>
    </div>
  )
}

export default Topbar