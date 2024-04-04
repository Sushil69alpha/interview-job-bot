//const OpenAI from 'openai';
const { NextResponse } = require('next/server');
import * as fs from 'node:fs';

// const openai = new OpenAI();
const { OpenAIStream, StreamingTextResponse }=require('ai');

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: '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'
});


export async function POST(request) {
  const blob = await request.blob();

  fs.writeFileSync('/tmp/audio.mp3', Buffer.from(await blob.arrayBuffer()));

  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream('/tmp/audio.mp3'),
    model: 'whisper-1',
  });

  const answer = transcription.text;

  return NextResponse.json({ answer });
}
