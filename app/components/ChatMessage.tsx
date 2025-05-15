// components/ChatMessage.tsx
import ReactMarkdown from "react-markdown"
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  type: "user" | "bot";
  content: string;
}

export function ChatMessage({ type, content }: ChatMessageProps) {
  const isUser = type === "user";

  return (
    <div className={cn("w-full flex", isUser ? "justify-end" : "justify-start")}>
      <Card
        className={cn(
          "max-w-[80%] px-4 py-2 rounded-2xl shadow-sm",
          isUser
            ? "bg-blue-600 text-[#e5e7eb] rounded-br-sm"
            : "bg-[#374151] text-[#e5e7eb] rounded-bl-sm"
        )}
      >
        <CardContent className="p-0">
          <p className="text-sm whitespace-pre-line"><ReactMarkdown>{content}</ReactMarkdown></p>
        </CardContent>
      </Card>
    </div>
  );
}
