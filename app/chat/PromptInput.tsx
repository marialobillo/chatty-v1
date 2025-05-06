'use client';

interface PromptInputProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  setSubmitType: (type: 'text' | 'image') => void;
}

export default function PromptInput({ input, handleInputChange, onSubmit, loading, setSubmitType }: PromptInputProps) {
  return (
    <form onSubmit={onSubmit} className="mainForm">
      <input
        name="input-field"
        placeholder="Say anything"
        onChange={handleInputChange}
        value={input}
      />
      <button type="submit" className="mainButton" disabled={loading} onClick={() => setSubmitType('text')}>
        TEXT
      </button>
      <button type="submit" className="secondaryButton" disabled={loading} onClick={() => setSubmitType('image')}>
        IMAGE
      </button>
    </form>
  );
}