import moment from "moment"
import { format } from "date-fns";
import { he } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, MessageCircle, Trophy } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Message = {
  date: number;
  content: string;
  userId: string;
  type: string;
  tags?: string[];
};

export default function MessageCard({ message }: { message: Message }) {

  return (
    <div className={`rounded-xl flex flex-col border border-white/10 bg-[#1e293b] text-white p-4 shadow-sm space-y-2 text-right`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className={`w-10 h-10 ${message.type === "error" ? "bg-[#f59460]" : "bg-[#6d9afb]"} `}>
            <AvatarFallback className={`flex items-center justify-center text-black ${message.type === "error" ? "bg-[#f59460]" : "bg-[#6d9afb]"} `}>
              {message.type === "achivment" ? <Trophy className={`${"bg-[#6d9afb]"} text-black`} />
                : message.type !== "error" ? <MessageCircle className={`${"bg-[#6d9afb]"} text-black`} /> : <AlertCircle className={`bg-[#f59460] text-black`} />}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-white/80">{translateType(message.type)}</span>
        </div>
        <span className="text-xs text-white/50">{moment().format("MM/DD HH:mm")}</span>
      </div>

      <p className="text-sm leading-relaxed text-white">
        {truncate(message.content, 30)}{" "}
        <span className="font-bold cursor-pointer text-white">עוד</span>
      </p>
      {message.tags && message.tags.length > 0 && (
        <div className="flex justify-end flex-wrap gap-2">
          {message.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs px-3 py-0.5 rounded-full border-white/20 text-white"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

function translateType(type: string): string {
  return type === "achivment" ? "השג" : type === "emo" ? "תיעוד" : "אזהרה"
}

function truncate(text: string, max: number) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}
