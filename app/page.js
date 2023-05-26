import Image from 'next/image'
import Wall from './Feed/page'

export const metadata = {
  title: 'ChatGPT Prompts',
  description: 'Generated prompts for chatGPT',
}

export default function Home() {
  return (
    <>

<h1 className='text-5xl font-semibold text-center m-5 bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text'>Welcome to PromptPal</h1>
<p className='text-center text-blue-600 m-5'>Never Run Out of Ideas: Get Random ChatGPT Prompts for Your Next Creative Project <br/> Sign in now and post yours!</p>
<Wall className="p-10"/>

    </>
  )
}
