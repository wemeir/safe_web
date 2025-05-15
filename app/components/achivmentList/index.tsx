import React from 'react'
import { useGetAchivment } from '@/app/hooks/api/achivment'

import MessageCard from '../MessageCard'

function index() {
    const { data } = useGetAchivment()

    return (
        <div className='h-screen w-screen'>
            {data?.map(message => <MessageCard message={message} />)}
        </div>
    )
}

export default index