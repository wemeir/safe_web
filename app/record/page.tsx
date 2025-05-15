"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react'
import { DateTimePicker24h } from '../components/CalenderInput';
import Input from './Input';
import Send from './Send';
import TagsInput from './TagsInput';

function page() {
    const [text, setText] = useState('')
    const [date, setDate] = useState<Date>();

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex flex-row h-[10%] w-full justify-between">
                <Button><Link href={"/home"}>X</Link></Button>
                <div className="w-1/2">
                    <DateTimePicker24h date={date} setDate={setDate} />
                </div>
            </div>
            <div className="h-[20%]">
                <Input setText={setText} text={text} />
            </div>
            <div>
                <TagsInput date={date?.getTime()??0} text={text}/>
            </div>
            <Send /* date={date?.getTime() ?? 0} text={text} */ />
        </div>
    )
}

export default page