import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function generateImageFromPrompt(prompt: string): Promise<string | null> {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  });

  const imageUrl = response?.data?.[0]?.url;
  if (!imageUrl) {
    throw new Error('Image URL not found in response');
  }

  return imageUrl;
}