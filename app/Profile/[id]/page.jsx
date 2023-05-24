"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {


 const {id} =  useParams()

 const [post, setPost] = useState([])


 async function getPosts(id){
  const response = await fetch(`/api/users/${id}/posts`)
  const data = await response.json()
  setPost(data)
}






useEffect(() => {
  getPosts(id)
    }, [])


 return (
  <>
<div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
  {post.map((e, i) => (
    <div className="bg-blue-100 rounded-lg  shadow-md" key={i + 1}>
      <div className="px-6 py-4 bg-blue-200">
        <p className=" text-blue-800  mb-2">
          Prompt: {e?.prompt ? e.prompt : null}
        </p>
        <p className="text-sm text-blue-600 mb-4">
          Tags: {e?.tag ? e.tag : null}
        </p>
        
      </div>
          <div className="flex mt-2 items-center">

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
            ></Image>          <p className="text-sm text-blue-800 font-medium">{e?.creator?.username? e.creator.username : "null"}</p>
          </div>
        </div>
  ))}
</div></>
 )
}
