"use client"
import Profile from '@/components/Profile'
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
  <Profile data={post} /> 

 )
}
