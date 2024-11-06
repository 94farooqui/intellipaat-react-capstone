import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext.js";
import searchWhite from './../assets/search-white.svg'
import searchBlack from './../assets/search-black.svg'
import { useNavigate } from "react-router-dom";


const Searchbar = () => {
  const [searchTerm,setSearchTerm] = useState(null)
  const {setSearchQuery} = useContext(SearchContext);
  const navigate = useNavigate()
  useEffect(()=>{
    console.log()
  },[])
  
  const onFormSubmit = (e) =>  {
    e.preventDefault()
    console.log(searchTerm)
    setSearchQuery(searchTerm)
    navigate(`search/${searchTerm}`)
  }
  
  return (
    <div className=" text-white rounded-lg ">
      <form onSubmit={onFormSubmit} className="flex gap-2 items-center ">
        <div className=" bg-slate-700  p-2 rounded-lg flex items-center gap-2 flex-1">
          <img src={searchWhite} className="w-4 h-4 opacity-35" alt="searchIcon" />
          <input
            placeholder="Type here"
            className="w-full bg-transparent focus:outline-none"
            name="search"
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
        </div>

        <button className=" bg-slate-700 px-4 py-1 rounded-md ">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
