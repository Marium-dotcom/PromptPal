"use client";

import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
    })();
  }, []);


  return (
<nav className='bg-blue-300 py-3 text-blue-800'>
  <div className='flex items-center justify-around '>
    <h2>
 ChatGPT Prompts
    </h2>
    <div className='flex justify-between '>



      {session?.user ? (
        <div className='flex space-x-4  items-center'>
<div>
<Link href='/CreatePost' className='text-blue-800 hover:text-white'>
            Create Post
          </Link>
          </div>
<div>
          <Link href='/' className='text-blue-800 hover:text-white'>
            Feed
          </Link>
</div>
          <div onClick={signOut} className='text-blue-800 cursor-pointer hover:text-white'>
            Sign Out
          </div>

          <Link href='/Profile'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='Profile image'
            />
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className=' border px-2 py-1 rounded bg-red-600 hover:bg-red-800 text-white'
              >
                Sign in with {provider.name}
              </button>
            ))}
        </>
      )}
    </div>
    
  </div>
  
</nav>
  );
};

export default Navbar;