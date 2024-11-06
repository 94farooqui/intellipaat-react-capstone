import React from 'react'
import { useParams } from 'react-router-dom'
import ImageList from '../components/ImageList'



const PhotoSearch = () => {
    const {searchQuery} = useParams()

  return (
    <div className='w-screen'>
    <div className='w-[1280px] mx-auto py-4'>
       <h1 className='text-3xl font-bold text-center mb-4'>Results for "{searchQuery}"</h1>
       <ImageList/>
    </div>

  </div>
  )
}

export default PhotoSearch