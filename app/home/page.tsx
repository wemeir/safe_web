"use client";

import React from 'react'

import AddAchivment from "../components/addAchivment"
import AchivmentList from "../components/achivmentList"
import MonthlyGoalCard from "../components/MonthlyGoalCard"
function page() {
    return (
        <div className='h-full w-full bg-[#202d46]'>
            <div>
                <MonthlyGoalCard />
            </div>

            <div className='w-full h-full'>
                המסע שלי:
            </div>
            <div className='w-full h-full'>
                מקום למעקב התקדמות ושיתוף אישי
            </div>
            <AddAchivment />
            <AchivmentList />
        </div>
    )
}

export default page