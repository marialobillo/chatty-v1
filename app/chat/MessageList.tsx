'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface MessageListProps {
  submitType: 'text' | 'image';
  messages: { id: string; role: string; content: string }[];
  imageUrl: string;
  loading: boolean;
  error: string;
}

const userColors: Record<string, string> = {
  user: '#00c0ff',
  assistant: '#e02aff',
  function: '#fff',
  system: '#fff',
  tool: '#fff',
  data: '#fff',
};

export default function MessageList({ submitType, messages, imageUrl, loading, error }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (submitType === 'text') {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 mt-2 border-gray-200 border min-h-[500px]">
      <div className="flex flex-col gap-4 pb-24 overflow-y-auto h-[500px]" id="messageContainer">
        {messages.length > 0 ? (
          messages.map((m) => {
            const isUser = m.role === 'user'
            return (
              <div
                key={m.id}
                className={`flex gap-2.5 mb-4 ${
                  isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                {!isUser && (
                  <img
                    src="https://robohash.org/chatty"
                    alt="Assistant avatar"
                    className="w-10 h-11"
                  />
                )}
                <div className={`grid ${isUser ? 'items-end' : ''}`}>
                  <h5
                    className={`text-sm font-semibold pb-1 ${
                      isUser ? 'text-right text-gray-900' : 'text-gray-900'
                    }`}
                  >
                    {isUser ? 'You' : 'Chatty'}
                  </h5>
                  <div
                    className={`px-3.5 py-2 rounded bg-opacity-90 ${
                      isUser ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <h5 className="text-sm font-normal leading-snug break-words whitespace-pre-wrap">
                      {m.content}
                    </h5>
                  </div>
                  <div className="inline-flex justify-end">
                  </div>
                </div>
                <div ref={bottomRef} />
              </div>
            )
          })
        ) : (
          <div className="text-red-500">{error}</div>
        )}
      </div>
    </div>
    );
  }

  return (
    <div className="response">
      {loading && <div className="loading-spinner"></div>}
      {imageUrl && (
        <Image src={imageUrl} className="image-box" alt="Generated image" width={400} height={400} />
      )}
    </div>
  );
}
