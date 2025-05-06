'use client';
import Image from 'next/image';

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
  if (submitType === 'text') {
    return (
      <div className="response">
        {messages.length > 0
          ? messages.map((m) => (
              <div key={m.id} className="chat-line">
                <span style={{ color: userColors[m.role] }}>
                  {m.role === 'user' ? 'User: ' : '⚡️ Chatty: '}
                </span>
                {m.content}
              </div>
            ))
          : error}
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
