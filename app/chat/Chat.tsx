'use client';
import { useState } from 'react';
import { useChat } from 'ai/react';
import MessageList from './MessageList';
import PromptInput from './PromptInput';

const Chat = () => {
  const [submitType, setSubmitType] = useState<'text'| 'image'>("text");
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


  return (
    <>
      <MessageList
        submitType={submitType}
        messages={messages}
        imageUrl={imageUrl}
        loading={loading}
        error={error}
      />
      <PromptInput
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
        loading={loading}
        setSubmitType={setSubmitType}
      />
    </>
  );
}

export default Chat;