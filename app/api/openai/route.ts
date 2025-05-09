import { OpenAIStream, StreamingTextResponse } from 'ai';
import { createStreamingCompletion } from '@/app/services/openai';

export const runtime = 'edge';

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json();
  console.log('messages:', messages);
  
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await createStreamingCompletion(messages);
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}


