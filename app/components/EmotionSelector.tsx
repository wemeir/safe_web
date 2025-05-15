'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import TagButtons from './TagButtons'

const positiveTags = ["סיפוק", "ביטחון", "רוגע", "גאווה", "חיבור", "עניין", "הערכה", "שמחה", "תקווה", "הכרת תודה", "הקלה", "תמלה", "אהבה", "התלהבות", "שלווה", "אמון"]
const negativeTags = ["כעס", "פחד", "לחץ", "קנאה", "ייאוש", "בדידות", "תסכול", "אכזבה", "עלבון", "בלבול", "חרדה"]

export default function EmotionSelector({ selectTag, setSelectTag }: { selectTag: string[], setSelectTag: Dispatch<SetStateAction<string[]>> }) {

    const [selectedTab, setSelectedTab] = useState<'positive' | 'negative'>('positive')

    return (
        <div className="p-4 rounded-xl text-white">
            <div className="flex justify-center mb-4">
                <button
                    className={`px-4 py-2 text-sm border-b-2 ${selectedTab === 'positive' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400'}`}
                    onClick={() => setSelectedTab('positive')}
                >
                    חיובי
                </button>
                <button
                    className={`px-4 py-2 text-sm border-b-2 ${selectedTab === 'negative' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400'}`}
                    onClick={() => setSelectedTab('negative')}
                >
                    שלילי
                </button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                {(selectedTab === 'positive' ? <TagButtons selectTag={selectTag} setSelectTag={setSelectTag} tags={positiveTags} />
                    : <TagButtons selectTag={selectTag} setSelectTag={setSelectTag} tags={negativeTags} />)}
            </div>

        </div>
    )
}
