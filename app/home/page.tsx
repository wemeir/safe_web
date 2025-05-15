"use client";

import React from 'react'

import AddAchivment from "../components/addAchivment"
import AchivmentList from "../components/achivmentList"
import MonthlyGoalCard from "../components/MonthlyGoalCard"
import { Home } from 'lucide-react';
function page() {
    return (
        <div className='h-full w-full bg-[#202e46]'>
            <div className='flex flex-row justify-center'>
                <Home />
                <div>
                    בית
                </div>
            </div>
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