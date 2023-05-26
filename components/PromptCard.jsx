import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function PromptCard({ppost, handleDelete}) {
    const { data: session } = useSession()
    const pathname = usePathname()

  return (
    <div className="bg-blue-100 rounded-lg p-1 overflow-hidden  shadow-md" key={ppost._id}>
    <div className="px-4 py-2 bg-blue-200">
      <span className=" text-blue-800">
        Prompt: {ppost.prompt}
      </span>
    </div>
    <div className="px-4 py-2">
      <span className="text-sm text-blue-600 font-medium">
        Tags: {ppost.tag}
      </span>
      <div className="flex items-center mt-2">
        <img
          src={
            ppost.creator?.image
              ? ppost.creator.image
              : "https://lh3.googleusercontent.com"
          }
          alt="user"
          className="w-8 h-8 rounded-full mr-2"
        />
        <Link
          href={`Profile/${ppost?.creator?._id ? ppost.creator._id : "NULL"}`}
          className="text-sm text-blue-800 font-medium hover:underline"
        >
          {ppost.creator?.username ? ppost.creator.username : "Unknown"}
        </Link>
      </div>
    </div>

{     session?.user.email ===  ppost.creator?.email && pathname==='/Profile' &&
   (   <div>          
     <button className='border-green-500 px-2 bg-green-400 border-2 m-2'> <Link href={`update?id=${ppost._id}`}>Edit</Link> </button>
    <button className='border-red-500 px-2 bg-red-400 border-2 m-2' onClick={handleDelete}>Delete</button>
      </div> )
      }
  </div> 
  )
}
