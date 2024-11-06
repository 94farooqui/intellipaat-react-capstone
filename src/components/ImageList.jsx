import React, { useContext, useEffect, useState } from 'react';

import { fetchImages } from '../api/fetchImages';
import { SearchContext } from '../context/SearchContext';
import ImageCard from './ImageCard';

const ImageList = () => {
  const { searchQuery, setSearchResults, setLoading, setError,loading,error } = useContext(SearchContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchingImages = async () => {
        setLoading(true)
        const data = await fetchImages(searchQuery)
        if(data){
            console.log("From Image List")
            console.log(data)
            setImages(data)
            setLoading(false)
        }
        else setLoading(false)
    }
    fetchingImages()
    
  }, [searchQuery, setSearchResults, setLoading, setError]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      )  : (
        <div className="image-list grid grid-cols-3 gap-x-4 gap-y-8">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageList;