"use client";

import { Textarea } from '@/components/ui/textarea'

function Input({setText, text}:{setText: React.Dispatch<React.SetStateAction<string>>,text:string }) {
    return (
        <Textarea 
          className="w-full h-[700px] resize-none border rounded-lg p-4"
            value={text}
            placeholder='שתף את ההצלחות וההשגים שלך' onChange={(e) => setText(e.target.value)} />
    )
}

export default Input