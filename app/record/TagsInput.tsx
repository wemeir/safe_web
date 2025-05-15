import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import EmotionSelector from '../components/EmotionSelector'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useaddAvhivment } from '../hooks/api/achivment'


function TagsInput({ date, text }: { text: string, date: number }) {
    const [selectTag, setSelectTag] = useState<string[]>([])
    const { mutate } = useaddAvhivment()
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div>רגשות</div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline"><Plus /></Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                <EmotionSelector selectTag={selectTag} setSelectTag={setSelectTag} />
                            </DialogDescription>
                        </DialogHeader>

                        <DialogFooter>
                            <Button onClick={() => mutate({ content: text, date, type: "emo", userId: "000", tags: selectTag })}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default TagsInput