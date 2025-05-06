'use client';
import { useState } from 'react';
import { useChat } from 'ai/react';
import Image from 'next/image';

const Chat = () => {
  const [submitType, setSubmitType] = useState<'text'|'image'>("text");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/openai',
  });

  const getImageData = async () => {
    try {
      const response = await fetch('/api/dall-e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: input })
      });
      const { imageUrl } = await response.json();
      setImageUrl(imageUrl);
      setError("");
    } catch (e) {
      setError(`An error occurred calling the API: ${e}`);
    }
    setLoading(false);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (submitType === 'text') {
      handleSubmit(event);
    } else {
      setLoading(true);
      setImageUrl("");
      getImageData().then();
    }
  };

  const userColors = {
    user: '#00c0ff',
    assistant: '#e02aff',
    function: '#fff',
    system: '#fff',
    tool: '#fff',
    data: '#fff'
  }

  const renderResponse = () => {
    if (submitType === 'text') {
      return (
        <div className="response">
          {messages.length > 0
          ? messages.map(m => (
              <div key={m.id} className="chat-line">
                <span style={{color: userColors[m.role]}}>{m.role === 'user' ? 'User: ' : '⚡️Last Codebender: '}</span>
                {m.content}
              </div>
            ))
          : error}
        </div>
      );
    } else {
      return (
        <div className="response">
          {loading && <div className="loading-spinner"></div>}
          {imageUrl && <Image src={imageUrl} className="image-box" alt="Generated image" width="400" height="400" />}
        </div>
      )
    }
  }

  return (
    <>
      {renderResponse()}
      <form onSubmit={onSubmit} className="mainForm">
        <input name="input-field" placeholder="Say anything" onChange={handleInputChange} value={input} />
        <button type="submit" className="mainButton" disabled={loading} onClick={() => setSubmitType('text')}>
          TEXT
        </button>
        <button type="submit" className="secondaryButton" disabled={loading} onClick={() => setSubmitType('image')}>
          IMAGE
        </button>
      </form>
    </>
  );
}

export default Chat;