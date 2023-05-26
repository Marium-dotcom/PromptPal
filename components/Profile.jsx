import React from 'react'
import PromptCard from './PromptCard'

export default function ({data, handleDelete}) {
  return (

<div className="p-5 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">

{data.map((ppost) => <PromptCard ppost={ppost} handleDelete={() => handleDelete(ppost._id)}/>)
   
}  
</div>  

)
}
