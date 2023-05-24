"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Form from '@/components/Form'


export default function Post() {
  const { data: session } = useSession();
  const router = useRouter();

  let initialState = {
    prompt: '',
    tag:''

  }
  const [submit, setSubmit] = useState({...initialState})



  function handleInput(e){
    const {value , name} = e.target
    setSubmit({...submit, [name]: value})
  }



  async function handleForm(e){
    e.preventDefault()
    try 
    {
      const response = await  fetch('/api/prompt/new',
       {
        method: 'POST',
        body: JSON.stringify ({userId: session?.user.id ,prompt: submit.prompt, tag: submit.tag })
        }
        )

        if (response.ok)
{
  router.push('/')
}



}



 catch (error) {
      console.log(error);
    }

  }

  return (


    <>
    {session?.user?
    <Form
    submit={submit}
    setSubmit={setSubmit}
    handleForm={handleForm}
    handleInput={handleInput}
    ></Form> : <h2 className='text-red-500 text-3xl text-center'>You have to sign up first to post</h2>}
    </>
//     <>
//     {session?.user?.email === 'mariumseyam@gmail.com' || 'maryoma.m98@gmail.com'?
// <>
//   <h1 className='text-center text-orange-500 text-4xl mb-10 font-semibold'>Post a prompt</h1>

//   <form onSubmit={handleForm} className='mx-auto max-w-lg'>
//   <textarea type="text" className='w-full text-black px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none sm:text-sm' name="prompt" value={submit.prompt} onChange={(e)=>handleInput(e)} cols="30" rows="10"></textarea>
//   <input type="text" className='mt-3 text-black w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none sm:text-sm' name='tag' value={submit.tag} onChange={(e)=>handleInput(e)} />
//   <button type="submit" className='mt-3 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'>Submit</button>
// </form> </> : "null"}
//     </>
   
  )
  
  }
