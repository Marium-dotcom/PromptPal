"use client"
import Profile from '@/components/Profile';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import {useState, useEffect} from 'react'

export default function Page() {
  const { data: session } = useSession();
  const [post, setPost] = useState([''])
let router = useRouter()



  async function getPosts(){
    const response = await fetch(`api/users/${session?.user.id}/posts`)
    const data = await response.json()
    setPost(data)
  }



  useEffect(() => {
getPosts()
  }, [])


 async function handleDelete(id){
    await fetch(`api/prompt/${id.toString()}`,{
      method: "DELETE"
    })
    const filteredPosts = post.filter((item) => item._id !== id);
    setPost(filteredPosts)

  }


  return (
  
<>
{session?.user?
<>
<h3 className='text-blue-500 text-2xl text-center'>Welcome {session?.user?.name? session.user.name : null}</h3>

<Profile data={post} handleDelete={handleDelete}/> </>: <h2 className='text-xl text-red-500 text-center'>Please login to view your profile</h2>
          }</>
  );
}
