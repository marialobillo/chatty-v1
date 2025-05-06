'use client';

import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
  return (
    <main className="App">
      <div className='container'>
        <div className='logoBox'>
          <Image src="/logo.png" alt="SuperViral.ai logo" width="380" height="90" />
          <p>This is an interface to talk to the Last Codebender. Ask him anything you want.</p>
        </div>
        <Link href="/chat">
            <button className="mainButton mt-4">Go to Chat</button>
        </Link>
      </div>
    </main>
  )
}