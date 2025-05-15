import { format } from 'date-fns'
import { he } from 'date-fns/locale'

type Message = {
  date: number
  content: string
  userId: string
  type: string
  tags?: string[]
}

export default function MessageCard({ message }: { message: Message }) {
  const time = format(new Date(message.date), 'HH:mm', { locale: he })

  return (
    <div className="card bg-base-200 shadow-sm text-right w-full h-full">
      <div className="card-body p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-gray-400">{time}</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-primary">{translateType(message.type)}</span>
            <div className="avatar placeholder">
              <div className="bg-primary text-white rounded-full flex items-center justify-center">
                🏆
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm leading-relaxed">
          {truncate(message.content, 60)}{' '}
          <span className="text-primary cursor-pointer">עוד</span>
        </p>

        {message.tags && message.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 justify-end">
            {message.tags.map((tag) => (
              <div key={tag} className="badge badge-outline text-xs">{tag}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function translateType(type: string): string {
  const map: Record<string, string> = {
    success: 'רִישָׁג',
    anger: 'כעס',
    fear: 'פחד',
    calm: 'רוגע',
  }

  return map[type] || type
}

function truncate(text: string, max: number) {
  return text.length > max ? text.slice(0, max) + '...' : text
}
