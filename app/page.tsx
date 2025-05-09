'use client';

import Link from 'next/link'
import Button from './components/ui/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <div className='flex flex-col items-center justify-center'>
        
          <p>This is an interface to talk to Chatty. Ask anything you want.</p>
        </div>
        <Link href="/chat">
            <Button 
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >Go to Chat</Button> 
        </Link>
       
      </div>
    </main>
  )
}