"use client"
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
<div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
{post.map((e, i) => (
  <div className="bg-blue-100 rounded-lg overflow-hidden shadow-md" key={i + 1}>
    <div className="px-6 py-4 bg-blue-200">
      <p className=" text-blue-800  mb-2">
        Prompt: {e?.prompt ? e.prompt : null}
      </p>
      <p className="text-sm text-blue-600 mb-4">
        Tags: {e?.tag ? e.tag : null}
      </p>
     
    </div>
    <div className="flex my-2">
        <p className="text-sm text-blue-800 font-medium">{e?.creator?.name}</p>
        
          <Image
            src={
              e?.creator?.image
                ? e.creator.image
                : "https://lh3.googleusercontent.com"
            }
            alt="null"
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
              <div className="">
                <button className='bg-green-500  text-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white'>
          <Link
            href={`/update?id=${e._id}`}
            className="text-white hover:text-white"
          >
            Edit
          </Link></button>
          <button
            onClick={() => handleDelete(e._id)}
            className="bg-red-500 text-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white"
          >
            Delete
          </button>
        </div>
        </div>
  </div>
))}
</div> </>: <h2 className='text-xl text-red-500 text-center'>Please login to view your profile</h2>
          }</>
  );
}
