import { NextResponse } from 'next/server'

import { connectToDatabase } from '../../lib/mongoose'
import { message } from '../../models/message'

export async function GET() {
  await connectToDatabase()

  const messages = await message.find()
  return NextResponse.json(messages)
}

export async function POST(req: Request) {
  await connectToDatabase()

  const body = await req.json()
  const { date, userId, content, type, tags } = body

  const newMessage = await message.create({
    date,
    userId,
    content,
    type,
    tags
  })

  return NextResponse.json(newMessage, { status: 201 })
}
