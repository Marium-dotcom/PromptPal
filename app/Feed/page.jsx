"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState();
  const [searchedValue, setSearchedValue] = useState([]);

  const [post, setPost] = useState([])



  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
// Search


async function searchByTag(searchValue){

  const response = await fetch(`api/search/${searchValue}`)
  const data = await response.json()
  
  setSearchedValue(data)

}


useEffect(() => {
searchByTag(searchValue)
}, [searchValue])


 async function getPosts(){
    const response = await fetch('api/prompt')
    const data = await response.json()

setPost(data)
  }


  useEffect(() => {
getPosts()
  }, [])

  
  return (
<>
  <form className="max-w-md mx-auto">
    <div className="flex items-center border-b-2 border-400 py-2">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <button
        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="submit"
      >
        Search
      </button>
    </div>
  </form>

  <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
  {searchValue
    ? searchedValue.map((e, i) => (
        <div className="bg-blue-100 rounded-lg overflow-hidden shadow-md" key={i + 1}>
          <div className="px-4 py-2 bg-blue-200">
            <span className=" text-blue-800 ">
              Prompt: {e.prompt}
            </span>
          </div>
          <div className="px-4 py-2">
            <span className="text-sm text-blue-600 font-medium">
              Tags: {e.tag}
            </span>
            <div className="flex items-center mt-2">
              <img
                src={
                  e.creator?.image
                    ? e.creator.image
                    : "https://lh3.googleusercontent.com"
                }
                alt="user"
                className="w-8 h-8 rounded-full mr-2"
              />
              <Link
                href={`Profile/${e?.creator?._id ? e.creator._id : "NULL"}`}
                className="text-sm text-blue-800 font-medium hover:underline"
              >
                {e.creator?.username ? e.creator.username : "Unknown"}
              </Link>
            </div>
          </div>
        </div>
      ))
    : post.map((e, i) => (
        <div className="bg-blue-100 rounded-lg overflow-hidden shadow-md" key={i + 1}>
          <div className="px-4 py-2 bg-blue-200">
            <span className=" text-blue-800">
              Prompt: {e.prompt}
            </span>
          </div>
          <div className="px-4 py-2">
            <span className="text-sm text-blue-600 font-medium">
              Tags: {e.tag}
            </span>
            <div className="flex items-center mt-2">
              <img
                src={
                  e.creator?.image
                    ? e.creator.image
                    : "https://lh3.googleusercontent.com"
                }
                alt="user"
                className="w-8 h-8 rounded-full mr-2"
              />
              <Link
                href={`Profile/${e?.creator?._id ? e.creator._id : "NULL"}`}
                className="text-sm text-blue-800 font-medium hover:underline"
              >
                {e.creator?.username ? e.creator.username : "Unknown"}
              </Link>
            </div>
          </div>
        </div>
      ))}
</div>
</>
  );
}

export default SearchInput;