import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard'



 const HandleCard = ({data}) => {
  return (
<>
<div className=" p-10 md:p-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-4 mt-4">

{  data.map((ppost, index) =>   <PromptCard key={index+1}  ppost={ppost}/>
)
}    
 </div> </>  )
}



export default function Feed() {

    const { data: session } = useSession()

    const [post, setPost] = useState([])
    const [searchValue, setSearchValue] = useState();
    const [searchedValue, setSearchedValue] = useState([]);
  
    async function getPosts(){
        const response = await fetch('api/prompt')
        const data = await response.json()
    
    setPost(data)
      }
    
    
      useEffect(() => {
    getPosts()
      }, [])

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

  {searchValue? 
 <HandleCard data={searchedValue}/>   : 
 <HandleCard data={post}/>
    }
</>
  )


}


