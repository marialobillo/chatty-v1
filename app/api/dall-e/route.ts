import { NextResponse } from 'next/server';
import { generateImageFromPrompt } from '@/app/services/dall-e';


// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  // Parse the request body to get the prompt
  const { prompt } = await req.json();
  
  try {
    // Ask Dall-E to generate an image based on the prompt
    const imageUrl = await generateImageFromPrompt(prompt);
    console.log('Image URL:', imageUrl);
    return NextResponse.json({ imageUrl });
  } catch (error: any) {
    console.error(error);
    return new Response(error?.message || error?.toString(), {
      status: 500,
    })
  }
}