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
<nav className='bg-blue-400 text-black'>
  <div className='flex items-center justify-around '>
    <h2>
 ChatGPT Prompts
    </h2>
    <div className='flex justify-between '>



    {/* {session?.user?.email === 'mariumseyam@gmail.com'?           <Link href='/CreatePost' className='text-black hover:text-white'>
            Create Post
          </Link>  : null
 } */}

      {session?.user ? (
        <div className='flex space-x-4  items-center'>
<div>
<Link href='/CreatePost' className='text-black hover:text-white'>
            Create Post
          </Link>
          </div>
<div>
          <Link href='/' className='text-black hover:text-white'>
            Feed
          </Link>
</div>
          <div onClick={signOut} className='text-black cursor-pointer hover:text-white'>
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
                className='text-black hover:text-white'
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