import React from 'react'
import { Link } from 'react-router-dom'

const ImageCard = ({image}) => {
  return (
    <div className='overflow-hidden'>
        <Link to={`/photos/${image.slug}`} state={{image}}><img src={image.urls.small} alt="topi" className='rounded-lg object-cover w-[400px] h-[300px] ' /></Link>
    </div>
  )
}

export default ImageCard