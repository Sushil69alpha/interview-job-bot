// import OpenAI from 'openai';

// const { OpenAIStream, StreamingTextResponse }=require('ai');
// const openai = require(OpenAI);

const { OpenAIStream, StreamingTextResponse }=require('ai');

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: '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'
});
export async function POST(request) {
  const body = await request.json();
  const mp3 = await openai.audio.speech.create({
    model: 'tts-1',
    voice: 'echo',
    input: body.text,
  });
  const audioData = await mp3.arrayBuffer();

  return new Response(audioData, {
    headers: {
      'Content-Type': 'audio/mpeg',
    },
  });
}
