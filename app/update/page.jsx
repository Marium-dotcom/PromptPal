"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Form from '@/components/Form'


export default function Post() {
  const { data: session } = useSession();
  let searchParams = useSearchParams();
  const promptid = searchParams.get('id')
  const router = useRouter();

  let initialState = {
    prompt: '',
    tag:''

  }
  const [submit, setSubmit] = useState({...initialState})



 
  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptid}`);
      const data = await response.json();

      setSubmit({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptid) getPromptDetails();
  }, [promptid]);


 function handleInput(e){
    const {value , name} = e.target
    setSubmit({...submit, [name]: value})
  }

  

  async function handleForm(e){
    e.preventDefault()
    try 
    {
      const response = await  fetch(`/api/prompt/${promptid}`,
       {
        method: 'PATCH',
        body: JSON.stringify 
        ({prompt: submit.prompt,
           tag: submit.tag })
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

    

<Form
    submit={submit}
    setSubmit={setSubmit}
    handleForm={handleForm}
    handleInput={handleInput}
    ></Form> 
    
   
  )
  
  }
