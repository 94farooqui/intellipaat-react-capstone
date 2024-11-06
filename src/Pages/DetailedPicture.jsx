import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailedPicture = () => {
    const location = useLocation()
    const image = location.state.image
    console.log(image)
  return (
    <div className='w-[1280px] mx-auto'>
        <img className='object-cover' w={1000} height={800} alt={location.state.slug} src={image.urls.full} />
    </div>
  )
}

export default DetailedPicture