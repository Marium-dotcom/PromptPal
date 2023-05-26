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

   
  )
  
  }
