"use-client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useaddAvhivment } from '../hooks/api/achivment'

function Send({ date, text }: { date: number, text: string }) {
    const { mutate } = useaddAvhivment()
    return (
        <div className='w-full'>
            <Button disabled={!(date&&text)} onClick={() => mutate({ content: text, date, type: "achivment", userId: "000000" })} className="bg-[#3a88f9] w-full h-[10%]">
                <Link href={"/home"}>
                    שמור השג
                </Link>
            </Button>
        </div>
    )
}

export default Send