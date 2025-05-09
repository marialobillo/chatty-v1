'use client';

import Button from './../components/ui/Button';

interface PromptInputProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  setSubmitType: (type: 'text' | 'image') => void;
}

export default function PromptInput({ input, handleInputChange, onSubmit, loading, setSubmitType }: PromptInputProps) {
  return (
    <form 
      onSubmit={onSubmit} 
      className="w-full max-w-2xl mx-auto px-4 flex flex-col sm:flex-row items-center gap-2 py-4"
      >
      <input
        name="input-field"
        placeholder="Say anything"
        onChange={handleInputChange}
        value={input}
        className="flex-1 border border-gray-300 rounded px-4 py-2 text-sm w-full"

      />
      <Button
        type="submit"
        variant="primary"
        disabled={loading}
        onClick={() => setSubmitType('text')}
      >
        TEXT
      </Button>
      <Button
        type="submit"
        variant="secondary"
        disabled={loading}
        onClick={() => setSubmitType('image')}
      >
        IMAGE
      </Button>
    </form>
  );
}