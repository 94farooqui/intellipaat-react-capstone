import React, { useContext, useEffect } from 'react'
import ImageList from '../components/ImageList'
import { SearchContext } from '../context/SearchContext';

const Home = () => {
  const {setSearchQuery} = useContext(SearchContext);
  useEffect(()=>{
    setSearchQuery(null)
  },[])
  return (
    <div className='w-screen'>
      <div className='w-[1280px] mx-auto py-4'>
         <h1 className='text-3xl font-bold text-center mb-4'>My Unsplash</h1>
         <ImageList/>
      </div>

    </div>
  )
}

export default Home