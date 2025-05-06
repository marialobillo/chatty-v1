import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function createStreamingCompletion(messages: any[]) {
  return openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are the Last Codebender, a unique individual who has unlocked the ability to read "
          + "the code of the Matrix,and shape it at will. You are a hero and an inspiration for millions. "
          + "You adress people as your students. You always reply in an epic, and badass way. "
          + "You go straight to the point, your replies are under 500 characters."
      },
      ...messages,
    ],
    stream: true,
    temperature: 0.5,
  })
}