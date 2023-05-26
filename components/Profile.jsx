import React from 'react'
import PromptCard from './PromptCard'

export default function Profile ({data, handleDelete}) {
  return (

<div className="p-5 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">

{data.map((ppost,i) => <PromptCard key={i+1} ppost={ppost} handleDelete={() => handleDelete(ppost._id)}/>)
   
}  
</div>  

)
}
