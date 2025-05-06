'use client';

import Image from 'next/image';
import Chat from './components/Chat';

export default function Home() {
  return (
    <main className="App">
      <div className='container'>
        <div className='logoBox'>
          <Image src="/logo.png" alt="SuperViral.ai logo" width="380" height="90" />
          <p>This is an interface to talk to the Last Codebender. Ask him anything you want.</p>
        </div>
        <Chat />
      </div>
    </main>
  )
}