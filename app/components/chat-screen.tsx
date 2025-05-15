'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Send } from 'lucide-react'
import { useAddAIMessage, useGetAllAIMessage } from '../hooks/api/ai'
import { ChatMessage } from './ChatMessage'

const suggestions = [
  "רוצה לדעת מה אני מרגיש",
  "הייתי רוצה לשתף",
  "דרכים להתמודד עם כעס",
]

export default function ChatScreen() {
  const [messages, setMessages] = useState<string>([])
  const { mutate } = useAddAIMessage()
  const { data, refetch } = useGetAllAIMessage()

  const handleSuggestionClick = (text: string) => {
    setMessages(text)
  }

  return (
    <div className="flex flex-col justify-between px-4 py-6 bg-background text-foreground h-[810] w-screen">

      <div className="flex justify-end items-center gap-2">
        <span className="text-sm font-semibold">עו״ס אביב AI</span>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.jpg" alt="Avatar" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </div>

      {!data ? (<><div className="mt-16 text-center">
        <p className="text-lg">היי אני אביב,</p>
        <p className="text-xl font-bold">איך אוכל לעזור לך היום?</p>
      </div>

        <div className="flex flex-col items-center gap-3 mt-6">
          {suggestions.map((text) => (
            <Button
              key={text}
              variant="outline"
              className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white transition-all"
              onClick={() => handleSuggestionClick(text)}
            >
              {text}
            </Button>
          ))}
        </div></>) : <div className="flex flex-col gap-2 p-4 max-h-[80vh] overflow-y-auto">
        {data?.map((msg, index) => (
          <ChatMessage key={index} type={msg.type as "user" | "bot"} content={msg.content} />
        ))}
      </div>}
      <div className="mt-6 flex flex-row">
        <Input
          //@ts-ignore
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          placeholder="רישום משהו פה ..."
          className="text-right placeholder:text-muted-foreground"
        />
        <Button onClick={() => mutate({ content: messages, type: "user", },
          { onSuccess: () => { refetch(); setMessages('') } })} ><Send /></Button>
      </div>
    </div >
  )
}
