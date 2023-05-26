"use client"
import Feed from "@/components/Feed";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Wall() {
  
  const [post, setPost] = useState([])




 async function getPosts(){
    const response = await fetch('api/prompt')
    const data = await response.json()

setPost(data)
  }


  useEffect(() => {
getPosts()
  }, [])

  
  return (
<>
<Feed/>
</>
  );
}

export default Wall;