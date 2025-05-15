import { GoogleGenAI } from '@google/genai';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();
import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../lib/mongoose'
import { ChatMessage } from '../../models/chat-message'
import { aiMessage } from '@/app/types/ai';
import { chat } from '@/app/utils/chatAi';

export async function GET() {
  await connectToDatabase()
  const messages = await ChatMessage.find().sort({ createdAt: 1 })
  return NextResponse.json(messages)
}

export async function POST(req: Request) {
  await connectToDatabase()
  const body = await req.json()
  const { content, type } = body
  const aiChatText=await chat({conversationId:"0000", message:content})
  
  if (!content) {
    return NextResponse.json({ error: 'Missing content' }, { status: 400 })
  }
  const message = await ChatMessage.create({
    content,
    type: type || 'user',
  })
  const aiText = await ChatMessage.create({
    content:aiChatText,
    type: "bot",
  })
  return NextResponse.json(aiText, { status: 201 })
}