import Image from 'next/image'
import SearchInput from './Feed/page'

export const metadata = {
  title: 'ChatGPT Prompts',
  description: 'Generated prompts for chatGPT',
}

export default function Home() {
  return (
    <>

    <h1 className='text-blue-500 font-semibold text-5xl text-center m-5'>Welcome to PromptPal</h1>
    <p className='text-center text-blue-600 m-5'>Never Run Out of Ideas: Get Random ChatGPT Prompts for Your Next Creative Project <br/> Sign in now and post yours!</p>
<SearchInput/>

    </>
  )
}
